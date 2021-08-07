const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const CommonConf = require('./webpack.common');
const outputFilename = '[name]'
const mediaFilename = '[name]'

module.exports = () => merge(CommonConf({outputFilename, mediaFilename}), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 3000,
        host: '0.0.0.0',
        exclude: /node_modules/ //意味あるのかどうか？
    },
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