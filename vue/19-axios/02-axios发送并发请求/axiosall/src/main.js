import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//多个请求同时成功的时候在调用方法
axios.all([axios({
  url: 'https://httpbin.org/brotli'
}), axios({
  url: 'https://httpbin.org/get'
})]).then(results => {
  console.log(results)
})
/**
 * Array(2)
0: {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
1: {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
length: 2
__proto__: Array(0)
 */

//axios.spread((res1, res2)=>{返回每一个的请求的饿数据})
axios.all([axios({
  url: 'https://httpbin.org/brotli'
}), axios({
  url: 'https://httpbin.org/get'
})]).then(axios.spread((res1, res2) => {
  console.log(res1, res2)
}))

/**
 * {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}config: {url: "https://httpbin.org/brotli", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
 * {data: {brotli: true, headers: {…}, method: "GET", origin: "111.18.133.245"}headers: {content-length: "419", content-type: "application/json"}request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}status: 200statusText: ""__proto__: Object {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
 */