const db = require('../models');

exports.createItem = async (req, res) => {
    try {
        const userId = req.user.id;
        const { item, item_description, item_price } = req.body;
        const newItem = await db.Item.create({ item, item_description, item_price, item_owner_id: userId })
        res.json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'An error occured', error });
    }
}

exports.getItem = async (req, res) => {
    try {
        const items = await db.Item.find({ item_owner_id: req.user.id }).populate('bid').exec();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

exports.getItemById = async (req, res) => {
    try {
        const item = await db.Item.findById(req.params.id).populate('bids').exec();
        res.json(item);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteItem = async (req, res) => {
    try {
        await db.Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}