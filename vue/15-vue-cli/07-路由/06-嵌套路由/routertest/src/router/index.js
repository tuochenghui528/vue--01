import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import ('../components/home');
const About = () => import ('../components/about');
const User = () => import('../components/user');
const News = () => import('../components/homeNews');
const Message = () => import('../components/homeMessage')
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
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
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    }
]
export default new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})