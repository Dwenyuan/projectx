import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    scripts: 0, //require('../data/run-script-data.js'), //测试脚本数据
    activeScript: {}
}

const mutations = {

}

export default new Vuex.Store({
    state,
    mutations
})
