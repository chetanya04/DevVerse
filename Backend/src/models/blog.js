const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    thumbnail:{
        type: String,
        required: true,
    },
    blog_url: {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Blog', Schema)