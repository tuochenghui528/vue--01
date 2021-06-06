import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../view/home/home');
const Categroy = () => import('../view/categroy/categroy');
const Car = () => import('../view/shoppingCar/shoppingCar');
const Profile = () => import('../view/profile/profile');

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/categroy',
        component: Categroy
    },
    {
        path: '/car',
        component: Car
    },
    {
        path: '/profile',
        component: Profile
    }
]
export default new Router({
    routes,
    mode: 'history'
})
