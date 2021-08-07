const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        script: ['./js/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js', //[name]はentryの名前(array_key)部分が入る
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        open: true,
        port: 3000,
        host: '0.0.0.0',
    }
}