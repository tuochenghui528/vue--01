const {add,num} = require('./js/mathUtil');
console.log(add(20,30));
console.log(num(20,30));


import abc from './js/info'
console.log(abc.name);
console.log(abc.age);

require('./css/normal.css');
require('./css/spection.less');
document.writeln('拓成辉，坚持！');

import Vue from 'vue';
new Vue({
    el: '#app',
    template: `
        <div>
            <h2>{{message}}</h2>
        </div>
    `,//写在template中的html模板最终会替换el中挂在的app下的内容  这样就不要把html模板都写在index.html中的#app下了
    data: {
        message: 'Hello Vue'
    }
})