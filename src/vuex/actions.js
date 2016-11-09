// 选中脚本
export const activeScript = ({ commit }, script) => commit('activeScript', { script })

// 选中任务
export const activeTask = ({ commit }, task) => commit('activeTask', { task })

// 选中任务执行结果
export const activeTaskResult = ({ commit }, taskResult) => commit('activeTaskResult', { taskResult })
