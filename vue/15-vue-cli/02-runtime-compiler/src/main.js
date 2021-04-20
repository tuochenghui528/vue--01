import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //render: createElement => createElement(APP) createElement用h替换
  /*
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  */ 
})

//runtime-compiler和runtime-only构建出来的项目其主要区别就子啊main.js中的new Vue(options)中的options
//runtime-compiler: template->ast(抽象语法树abstract syntax tree)->render->virtul dom->UI
//runtime-only: render->virtul dom->UI
//所以runtime-only编译的代码轻6kb,性能更高