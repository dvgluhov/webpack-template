const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']
             }) 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Мой проект',
            template: path.resolve(__dirname, './public/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('main.css')
    ],

}