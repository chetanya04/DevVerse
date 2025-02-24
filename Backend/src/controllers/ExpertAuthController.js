const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ExpertModel = require('../models/expert')

const expertSignup = async (req, res) => {
    try {
        const { name, email, password, designation, experience } = req.body;
        const existingExpert = await ExpertModel.findOne({ email });
        if (existingExpert) {
            return res.status(409).json({
                message: 'Expert already exists, please login',
                success: false
            });
        }
        const newExpert = new ExpertModel({
            name,
            email,
            password,
            designation,
            experience
        });
        newExpert.password = await bcrypt.hash(password, 10);
        await newExpert.save();

        res.status(201).json({
            message: "Expert signed up successfully",
            success: true
        });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const expertLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const expert = await ExpertModel.findOne({ email: email.toLowerCase() });
        const errorMsg = 'Auth failed: email or password is incorrect';

        if (!expert) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPasswordValid = await bcrypt.compare(password, expert.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Generate JWT
        const jwtToken = jwt.sign(
            { email: expert.email, _id: expert._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email: expert.email,
            name: expert.name,
            designation: expert.designation,
            experience: expert.experience
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ message: "No token provided", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    const expert = await ExpertModel.findById(decoded._id, "name email designation experience");
    if (!expert) {
      return res.status(404).json({ message: "Expert not found", success: false });
    }

    req.expert = expert;
    next(); 
  } catch (err) {
    console.error("Token Verification Error:", err);
    res.status(401).json({ message: "Invalid or expired token", success: false });
  }
};


module.exports = { expertSignup, expertLogin, verifyToken };
