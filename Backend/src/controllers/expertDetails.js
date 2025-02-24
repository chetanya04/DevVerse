const Expert = require('../models/expertDetails');

// Handle creating a new expert
exports.createExpert = async (req, res) => {
  const { name, experience, designation } = req.body;
  const photo = req.file ? req.file.filename : null;

  try {
    const newExpert = new Expert({
      name,
      experience,
      designation,
      photo,
    });

    await newExpert.save();
    res.status(201).json({ message: 'Expert saved successfully', expert: newExpert });
  } catch (err) {
    res.status(500).json({ message: 'Error saving expert', error: err });
  }
};

exports.getExperts = async (req, res) => {
  try {
    const experts = await Expert.find();
    const updatedExperts = experts.map((expert) => ({
      ...expert.toObject(),
      photo: expert.photo ? `http://localhost:5000/uploads/${expert.photo}` : null,
    }));

    res.status(200).json(updatedExperts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching experts', error: err });
  }
};

