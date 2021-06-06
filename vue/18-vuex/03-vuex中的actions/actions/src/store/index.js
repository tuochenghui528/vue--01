import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        info: {id: 1, name: 'james', age: 35}
    },
    mutations: {
        uploadFun(state, name) {
            state.info.name = name
        }
    },
    actions: {
        aupdateFun(context, name) {
            //context相当于store
            return new Promise((resolve, reject) => {
                context.commit('uploadFun', name);
                resolve();
            })
        }
    },
    getters: {

    },
    modules: {

    }
})
export default store;