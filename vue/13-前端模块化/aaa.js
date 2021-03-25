var name = '小明';
var flag = true;
function num(num1, num2) {
    return num1+num2
}
if (flag) {
    console.log(num(30, 20));
}



//导出有commonJS规范  AMD  CMD
//modeule.exports = {name:name,num:num}  var example = require(./aaa.js)  example.name example.num(10, 31);

//es6的导出 自己内部带的模块化  浏览器作为底层来支持 export import

//1.export let name='小明'; export function num(num1,num2){return num1+num2}  import {name, num} from './aaa.js'
//2.export {name, num} import {name, num} from './aaa.js'
//3.export default {name} let name = '小明' import abc from './aaa.js'   一个文件只能有一个默认的export default  import的时候不带{}且 导出的名字和导入的名字可以不一致
//4. import * as abc from './aaa.js'  as后面跟的abc是导出对象的名称   abc.flag
