import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '../vuex/getters'
Vue.use(Vuex)

const state = {
    scripts: 0, //require('../data/run-script-data.js'), //测试脚本数据
    activeScript: {}
}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
