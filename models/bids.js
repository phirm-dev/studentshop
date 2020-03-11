const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    item_id: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
    },
    bid_price: {
        type: Number,
        required: true,
    },
    date_submitted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('bid', BidSchema);