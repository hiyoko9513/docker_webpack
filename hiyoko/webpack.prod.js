const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const CommonConf = require('./webpack.common');
const outputFilename = '[name].[chunkhash]'
const mediaFilename = '[contenthash]'

module.exports = () => merge(CommonConf({outputFilename, mediaFilename}), {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/other.html',
            filename: 'other.html',
            inject: 'body',
            chunks: ['other']
        }),
    ]
});