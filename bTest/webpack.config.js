const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/babel.js"
    },
    // entry: {
    //     main: './src/index.js',
    //     search: './src/search.js',
    // },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // }
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, ]
    }
};