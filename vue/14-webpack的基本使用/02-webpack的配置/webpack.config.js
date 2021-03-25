const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//动态获取路径  出口处必须是绝对路径 _dirname代表的是当前文件的根目录 拼接dist
        filename: 'bundle.js'
    }
}