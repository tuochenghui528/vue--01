import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex);
//2.创建对象
const store = new Vuex.Store({
    state: {
        count: 100
    },
    mutations: {//同步
        //方法
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addCounter(state, count) {
            state.count += count;
        }
    },
    actions: {//异步

    },
    getters: {
        //类似与计算属性
    },
    modules: {
        
    }
});
//3.导出
export default store