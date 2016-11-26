import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '../vuex/getters'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import tasks from '../data/task-data.js'
import taskResult from '../data/task-result.js'
import scripts from '../data/run-script-data.js'
import args from '../data/arg-data.js'
import agents from '../data/agents-data.js'
import logs from '../data/log-data.js'

import detailResultChange from '../data/user-detail.js'
import detailResult from '../data/user-detail-change.js'
import charts from '../data/charts.js'

Vue.use(Vuex)

const state = {
    modelTypesEnum: ["稳定速率", "递增", "递减", "波浪型", "振荡型", "波浪与振荡", "随机"], //可能的模型
    rendezvousEnum: ["禁用", "按照Controller设置启用", "按照scripter设置启用"], //可能的配置
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

    detailResult,
    detailResultChange,
    activeDetailTask: {},
    activeDetailFailTask: {},
    activeDetailOver5: {},
    activeDetailError: {},
    activeDetailURL: {},
    activeDetailFailURL: {},

    scripts, //测试脚本数据
    activeScript: {} //临时脚本，点击脚本列表后激活的脚本
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
