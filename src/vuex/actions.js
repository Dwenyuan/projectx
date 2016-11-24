// 选中脚本
export const activeScript = ({ commit }, script) => commit('activeScript', { script })

// 选中任务 配置任务
export const activeTask = ({ commit }, task) => commit('activeTask', { task })

// 改变选中任务的模型类型
export const changeModelType = ({ commit }, modelType) => commit('changeModelType', { modelType })

// 改变集结点设置 
export const changeRendezvous = ({ commit }, rendezvous) => commit('changeRendezvous', { rendezvous })


// 选中任务执行结果
export const activeTaskResult = ({ commit }, taskResult) => commit('activeTaskResult', { taskResult })

// 选中图表
export const activeChart = ({ commit }, chart) => commit('activeChart', { chart })

export const setOptionShow = ({ commit }) => commit('setOptionShow')

export const addchart = ({ commit }) => commit('addchart')

export const removeChart = ({ commit }, chart) => commit('removeChart', { chart })
