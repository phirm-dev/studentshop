const db = require('../models');

exports.getUserProfile = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await db.User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

exports.editProfile = async (req, res) => {
    try {
        const update = await db.User.findByIdAndUpdate(req.body);
        res.json(update);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

