//  Load Environmental variables
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
    console.log('Running application in development environment');
    require('dotenv').config({ path: './app.env' });
}

const { start } = require('./index');

start();