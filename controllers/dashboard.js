const path = require('path');
const pathToAngularApp = path.join(__dirname + '/dist/studentshop');
exports.index = (req, res, next) => {
    useAngularPath(req, res, next);
    res.sendFile(pathToAngularApp + '/index.html');
};
