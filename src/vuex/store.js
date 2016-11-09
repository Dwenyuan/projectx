import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '../vuex/getters'
import * as actions from './actions.js'
import tasks from '../data/task-data.js'
import taskRsult from '../data/task-result.js'
import scripts from '../data/run-script-data.js'
import args from '../data/arg-data.js'
import agents from '../data/agents-data.js'
import logs from '../data/log-data.js'
Vue.use(Vuex)

const state = {
    tasks,
    activeTask: {},

    taskRsult,
    activeTaskResult: {},
    activeTaskLines: {},

    args,
    activeArg: {},

    agents,
    activeAgent: {},

    logs: logs,

    scripts, //测试脚本数据
    activeScript: {} //临时脚本，点击脚本列表后激活的脚本
}

const mutations = {
    activeScript(state, { script }) {
        state.activeScript = script
    },
    activeTask(state, { task }) {
        state.activeTask = task
    },
    activeTaskResult(state, { taskResult }) {
        state.activeTaskResult = taskResult
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
