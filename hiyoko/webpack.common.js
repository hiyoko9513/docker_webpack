const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({outputFilename, mediaFilename}) => ({
    entry: {
        main: ['./src/js/index.js'],
        other: ['./src/js/other.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${outputFilename}.js`,
        assetModuleFilename: `media/${mediaFilename}[ext]`,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 3000,
        host: '0.0.0.0',
        exclude: /node_modules/ //意味あるのかどうか？
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test: /\.(ico|svg|jpe?g|png|webp|mp4|woff2?|ttf|eot)$/,
                type: 'asset/resource'
            },{
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: `${outputFilename}.css` //分割
        })
    ]
});