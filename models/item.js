const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    item_description: {
        type: String,
        required: true
    },
    item_price: {
        type: Number,
        required: true,
    },
    item_display_image: {
        type: String,
        required: false,
    },
    item_images: [],
    item_owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    bids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bid'
        }
    ],
    date_submitted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('item', ItemSchema);