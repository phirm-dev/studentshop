const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const db = require('../models');
const { generateToken } = require('../utils/token');


passport.use(new localStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());



exports.login = (req, res) => {
    res.render('login');
}

exports.signup = (req, res) => {
    res.render('signup');
}

exports.register = (req, res) => {
    const { firstname, lastname, email, phonenumber, password, agreed } = req.body;
    const username = email;
    if (!agreed) return res.redirect('/signup');
    if (!firstname || !lastname || !email || !phonenumber || !password) return res.render('signup');
    db.User.register(
        new db.User({
            username,
            first_name: firstname,
            last_name: lastname,
            email,
            phone_number: phonenumber,
        }),
        password,
        (err, user) => {
            if (err) {
                return res.render('signup', { msg: err });
            }
            const payload = {
                email,
                id: user._id
            };
            const token = generateToken(payload);
            res.redirect('/app?token=' + token );
        }
    );
}

exports.authenticate = (req, res) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            console.log(err);
            return res.redirect('back');
        }
        const payload = {
            email: req.body.username,
            id: user._id
        };
        const token = generateToken(payload);
        res.redirect('/app?token=' + token );
    })(req, res);
}