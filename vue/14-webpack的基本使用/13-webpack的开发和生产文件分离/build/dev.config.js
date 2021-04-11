const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig,{
    devServer: {
        contentBase: './dist',//热加载这个文件价
        inline: true,//热加载
        // port: 8082  m默认事8081
    }
});