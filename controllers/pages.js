const db = require('../models');

exports.index = async (req, res) => {
    try {
        const items = await db.Item.find();
        res.render('index', { items });
    } catch (error) {
        res.render('index', { items: [] });
    }
}

exports.products = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await db.Item.findById(id);
        res.render('product', { item });
    } catch (error) {
        res.render('product', { item: {} });
    }
}

exports.bid = (req, res) => {
    const itemId = req.params.itemId;
    res.render('bid', { itemId });
}

exports.submitBid = async (req, res) => {
    try {
        const { full_name, phone_number, bid_price } = req.body;
        const itemId = req.params.itemId;
        if (!full_name || !phone_number || !bid_price || !itemId) {
            return res.redirect('back');
        }
        const payload = {
            full_name,
            phone_number,
            bid_price,
            item_id: itemId
        };
        const bidPromise = db.Bid.create(payload);
        const itemPromise = db.Item.findById(itemId);
        const result = await Promise.all([bidPromise, itemPromise]);
        const [bid, item] = result;
        if (!bid) return res.redirect('back');
        item.bids.push(bid._id);
        item.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
}
