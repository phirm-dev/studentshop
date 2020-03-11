const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

const indexPageRoutes = require('./routers/pages');
const authRoutes = require('./routers/auth');
const itemApiRoutes = require('./routers/item_api');
const bidApiRoutes = require('./routers/bid_api');
const { protect } = require('./utils/protect');

mongoose.Promise = global.Promise;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', indexPageRoutes);
app.use('/auth', authRoutes);
app.use('/api/item', protect, itemApiRoutes);
app.use('/api/bid', protect, bidApiRoutes);


const pathToAngularApp = path.join(__dirname + '/dist/studentshop');
function useAngularPath(req, res, next) {
    app.use(express.static(path.join(__dirname, 'dist/studentshop')));
}

app.get('/app*', (req, res, next) => {
    useAngularPath(req, res, next);
    res.sendFile(pathToAngularApp + '/index.html');
});

exports.start = async () => {
    await mongoose.connect(config.database_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(config.port, () => {
        console.log('Listening at port ', config.port);
    });
};
