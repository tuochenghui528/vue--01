import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const moduleA = {
    state: {
        module_names: 'Lebron James'
    },
    mutations: {
        updateNames(state, name) {
            state.module_names = name;
        }
    },
    actions: {
        aupdate(context, name) {
            setTimeout(() => {
                context.commit('updateNames', name)
            }, 1000)
        }
    },
    getters: {
        fullName(state) {
            return state.module_names + '111'
        },
        fullName2(state, getters) {
            console.log(getters)
            return getters.fullName + '2222';
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.name
        }
    }

}

const store = new Vuex.Store({
    state: {
        name: 'Kobe Bryant'
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    modules: {
        a: moduleA
    }
});
export default store;