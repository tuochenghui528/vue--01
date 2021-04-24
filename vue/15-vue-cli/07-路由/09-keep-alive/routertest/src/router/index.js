import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../components/home');
const About = () => import('../components/about');
const User = () => import('../components/user');
const News = () => import('../components/homeNews');
const Message = () => import('../components/homeMessage');
const Profile = () => import('../components/profile');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '内容'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
//前置钩子  在跳转前修改
router.beforeEach((to, from, next) => {
  //从from跳转到to
  // document.title = to.meta.title;
  document.title = to.matched[0].meta.title;//加matched是为了解决路由且套的问题  title现在已经修改过来了
  console.log('++++')
  next()//这个函数不调用  就不会执行下面的内容  组件内容出不来
})

//后置钩子
router.afterEach((to, from) => {
  console.log('-----')
})

//beforeEach和afterEach都称之为全局守卫  还有路由独享守卫 组件内的守卫  进入组件的时候调用 
export default router
