import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// 路由的两种模式 hash和history
//hash事url的location.hash = 'aaa';就可以更改路由在#/aaa
//history事html5的 history.pushState({},'','aaa');/aaa
//history每push一个就相当于入栈一个  出栈的永远是最后push进去的那个
//history.back()相当于浏览器的后退按钮  是栈里边当前值往后移一个
//history.go(-1);history.go(-2);history.go(2)分别是栈里边往后移一个/两个往前移两个  相当于指定值
//history.replaceState({},'','aaa');/aaa  栈里边只有一个值
