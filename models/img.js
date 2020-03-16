const mongoose = require('mongoose');

const ImgSchema = new mongoose.Schema({
    owner_id: {
        required: true,
        type: String,
    },
    img_uri: {
        required: true,
        type: String
    },
    img_name: {
        required: true,
        type: String
    },
    img_path: {
        required: true,
        type: String
    },
    date_submitted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('img', ImgSchema);