import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    mutations,
    getters,
    actions,
    modules: {
        a: moduleA
    }
});
export default store;