const db = require('../models');
const multer = require('multer');
const path = require('path');
const config = require('../config');

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
        const item = await db.Item.findById(id).populate('item_images');
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

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('photo');

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    const mimeType = fileTypes.test(file.mimetype)

    if (mimeType && extname) {
        return cb(null, true);
    } else {
        cb('Error:Images Only!');
    }
}

exports.createItem = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                res.redirect('back');
            } else {

                // create the image object and add to db
                // Get the img id from created img object
                // create the item object and push the image ID
                const { filename } = req.file;
                const img_uri = `${config.img_base_uri}/uploads/${filename}`;
                const img_name = req.file.filename;
                const img_path = `/uploads/${req.file.filename}`;
                const newImg = await db.Img.create({ owner_id: req.params.id, img_uri, img_name, img_path });



                const userId = req.params.id;
                const { item, item_description, item_price } = req.body;
                const newItem = await db.Item.create({ item, item_description, item_price, item_owner_id: userId, item_images: [newImg._id] });
                res.redirect(`/app/item/details?id=${newItem._id}`);
            }
        });


    } catch (error) {
        res.status(500).json({ message: 'An error occured', error });
    }
}

