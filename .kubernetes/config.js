let environment = {};
require('dotenv').config({path: './app.env'});

environment.development = {
    port: process.env.PORT || 3000,
    database_uri: 'mongodb://phirmware:itachi1@ds239309.mlab.com:39309/student_shop',
    token_key: process.env.TOKEN_KEY,
    img_base_uri: process.env.IMG_BASE_URI,
}

environment.production = {
    port: process.env.PORT,
    database_uri: 'mongodb://phirmware:itachi1@ds239309.mlab.com:39309/student_shop',
    token_key: 'Tmx8Y=fEn!A2KF=5cU2#&UaHMJweeUcTSWN5-6pXTUEHpu?Yhv',
    img_base_uri: 'https://stushop.herokuapp.com',
}

let defaultEnv = typeof process.env.NODE_ENV !== 'undefined' ? process.env.NODE_ENV.trim() : 'development';
let exportEnv = typeof environment[defaultEnv] !== 'undefined' ? environment[defaultEnv] : environment.development;

module.exports = exportEnv;