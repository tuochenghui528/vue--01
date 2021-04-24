import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import About from '../components/about'

Vue.use(Router);
const routes = [
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },{
    path: '/about',
    component: About
  }
]
export default new Router({
  routes,
  mode: 'history'//修改模式
})
