import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//axios是依赖于promisede 返回的是一个promise对象
//一种写法
axios({
  url: 'https://httpbin.org/get',
  method: 'get'//get的时候可以省略method
}).then(res => {
  console.log(res)
})


//第二种写法
axios.get('https://httpbin.org/get', {
  method: 'get'
}).then((res => {
  console.log(res);
}))