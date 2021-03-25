const {add, num} = require('./mathUtil');
console.log(add(20, 30));
console.log(num(20, 30));

import info from './info'
console.log(info.name);

//package.json里加"build": "webpack"后可以执行npm run build 来打包  而不用直接执行webpack 不同点就是npm run build可以使用本地的webpack  devDependencies是开发模式  运行后就不需要了