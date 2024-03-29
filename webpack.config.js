const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  target: 'web', // This is important for using Node.js libraries in the browser
};