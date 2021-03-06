let environment = {};

// url to mlabdb = 'mongodb://phirmware:itachi1@ds239309.mlab.com:39309/student_shop';
// dev token key
// heroku image base uri = 'https://stushop.herokuapp.com';

environment.development = {
    port: process.env.PORT || 3000,
    database_uri: process.env.DB_URI,
    token_key: process.env.TOKEN_KEY,
    img_base_uri: process.env.IMG_BASE_URI,
}

environment.production = {
    port: process.env.PORT || 3000,
    database_uri: process.env.DB_URI,
    token_key: process.env.TOKEN_KEY,
    img_base_uri: process.env.IMG_BASE_URI,
}

let defaultEnv = typeof process.env.NODE_ENV !== 'undefined' ? process.env.NODE_ENV.trim() : 'development';
let exportEnv = typeof environment[defaultEnv] !== 'undefined' ? environment[defaultEnv] : environment.development;

module.exports = exportEnv;