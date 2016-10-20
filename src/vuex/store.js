import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '../vuex/getters'
import scripts from '../data/run-script-data.js'
Vue.use(Vuex)

const state = {
    scripts, //测试脚本数据
    activeScript: {} //临时脚本，点击脚本列表后激活的脚本
}

const mutations = {
    activeScript(state, { script }) {
        activeScript = script
    }
}

const actions = {
    activeScript: ({ commit }, script) => commit('activeScript', { script })
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
