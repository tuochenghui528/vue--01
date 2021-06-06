import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        student: [
            {id: 1, name: 'why', age: 20},
            {id: 2, name: 'kobe', age: 24},
            {id: 3, name: 'James', age: 30},
            {id: 4, name: 'Curry', age: 10}
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        //类似与计算属性
        //1.显示大于20岁的人
        more20People(state) {
            return state.student.filter(item => item.age > 20);    
        },
        //2.大于20岁的人长度
        square(state, getters) {
            return getters.more20People.length;
        },
        //3.如果是传过来的数据  想获取大于传过来的数据的数据
        moreAge(state, getters) {
            //只能return函数传参  age就是传过来的参数 
            return age => { return state.student.filter(item => item.age > age)}
        }
    },
    modules: {

    }
});
export default store;