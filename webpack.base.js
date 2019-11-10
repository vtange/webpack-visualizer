'use strict';

var path = require('path');
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
