const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');//丑化代码  使得代码压缩成最小
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig,{
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})