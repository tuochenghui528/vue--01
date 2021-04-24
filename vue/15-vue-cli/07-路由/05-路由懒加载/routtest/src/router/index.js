import Vue from 'vue'
import Router from 'vue-router'

//正常引入  不是懒加载  打包出的文件vendor.cce5c345f311ea9274d4.js是三方件；manifest.2ae2e69a05c33dfc65f8.js是底层支撑例如commonJS之类的；app.6312b1ca96fd8086455c.js是当前应用程序
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

//路由懒加载  提高页面渲染速度  按需加载  渲染哪个路由加载哪个路由 打包出来的dist文件下的js会变多 每个路由映射的模块都打一个包 app.js总体变小  请求变快
const Home = () => import('../components/home')
const About = () => import('../components/about')
const User = () => import('../components/user')

Vue.use(Router)

const routes =  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user:userId',
    component: User
  }
]

export default new Router({
  routes,
  mode: 'history'
})
