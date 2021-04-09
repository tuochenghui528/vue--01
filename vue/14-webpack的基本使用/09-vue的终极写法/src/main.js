const {add, num} = require('./js/mathUtil');
console.log(add(20,30));
console.log(num(20,30));


import Vue from 'vue';
import {name, age} from './js/info';
console.log(name, age);

require('./css/normals.css');
require('./css/spections.less');

document.writeln('拓成辉  加油   坚持！');
// const App = {
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//         </div>
//     `,
//     data() {
//         return {
//             message: 'Hello Vue'
//         }
//     }
// }
// import App from './js/vue'
import App from './vue/component.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})