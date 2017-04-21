const webpack = require('webpack');
const path = require('path');

const buildPath = path.join(__dirname, './build');
const staticsPath = path.join(__dirname, './static');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: buildPath,
    },
    plugins:
        [
        new HtmlWebpackPlugin({
            template: 'html/index.template.ejs',
            inject: 'body',
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: buildPath
        }),
        new CopyWebpackPlugin([{ from: staticsPath }])
        ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }
        ]
    }
};
