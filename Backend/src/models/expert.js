const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    experience: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Expert', ExpertSchema);
