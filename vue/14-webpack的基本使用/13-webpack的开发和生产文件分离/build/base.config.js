const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归拓成辉所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // new UglifyjsWebpackPlugin()
    ],
    // devServer: {
    //     contentBase: './dist',//热加载这个文件价
    //     inline: true,//热加载
    //     // port: 8082  m默认事8081
    // }
}