const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email.toLowerCase() });
        const errorMsg = 'Auth failed: email or password is incorrect';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email: user.email,
            name: user.name
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// GET: Verify token and fetch user details
const getUserDetails = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
        if (!token) {
            return res.status(401).json({ message: "No token provided", success: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id, 'name email');
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        } 

        res.status(200).json({
            message: "User authenticated",
            success: true,
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        console.error("Token Verification Error:", err);
        res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};

module.exports = { login, getUserDetails, signup };