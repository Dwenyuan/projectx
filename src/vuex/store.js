import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '../vuex/getters'
import * as actions from './actions.js'
import tasks from '../data/task-data.js'
import taskResult from '../data/task-result.js'
import scripts from '../data/run-script-data.js'
import args from '../data/arg-data.js'
import agents from '../data/agents-data.js'
import logs from '../data/log-data.js'
import charts from '../data/charts.js'
Vue.use(Vuex)

const state = {
    tasks,
    activeTask: {},

    activeTaskResult: taskResult.tasks[0],
    taskResult,
    activeTaskLines: {},

    args,
    activeArg: {},

    agents,
    activeAgent: {},

    logs,

    charts,
    activeChart: {},

    scripts, //测试脚本数据
    activeScript: {} //临时脚本，点击脚列表后激活的脚本
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
    },
    activeChart(state, { chart }) {
        state.activeChart = chart
    },
    addchart(state) {
        state.charts.push({
            optionShow: false,
            checked: []
        })
    },
    removeChart(state, { name }) {
        state.charts.remove(name)
    },
    setOptionShow(state) {
        state.activeChart.optionShow = !state.activeChart.optionShow
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
