const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                //css-loader只打包css  不会将css加载到dom
                //style-loader负载将样式加载到dom
                //webpack  use是从右往左读取的 所以顺序不能颠倒
                use: [ "style-loader", "css-loader"],
            },
        ],
    }
}