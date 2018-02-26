const path = require('path');

const config = {
    entry: './app/assets/scripts/app.js',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts/'),
        filename: 'app.bundle.js'
    }
  };

  module.exports = config;