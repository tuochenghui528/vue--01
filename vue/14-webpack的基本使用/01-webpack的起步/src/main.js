//commonJS规范
const {add, num} = require('./mathUtils');
console.log(add(20, 30));
console.log(num(20, 30));

//es6导入
import { age, height} from './info'
console.log(age);
console.log(height);

//在全局安装npm install webpack@3.6.0 -g 后执行 webpack ./src/main.js ./dist/bundle.js  就可以在dist下面生成budle.js  解析commonJS语法