// ====================任务配置相关===============================================//
// 选中脚本
export const activeScript = ({ commit }, script) => commit('activeScript', { script })

// 选中任务 配置任务
export const activeTask = ({ commit }, task) => commit('activeTask', { task })

export const changeIsCaps = ({ commit }, isCaps) => commit('changeIsCaps', { isCaps })

export const changeModelType = ({ commit }, modelType) => commit('changeModelType', { modelType })

export const changeTotalUsers = ({ commit }, totalUsers) => commit('changeTotalUsers', { totalUsers })

export const changeCaps = ({ commit }, caps) => commit('changeCaps', { caps })

export const changeLimit = ({ commit }, limit) => commit('changeLimit', { limit })

export const changeKeepTime = ({ commit }, keepTime) => commit('changeKeepTime', { keepTime })

export const changeStep = ({ commit }, step) => commit('changeStep', { step })

export const changeChooseType = ({ commit }, chooseType) => commit('changeChooseType', { chooseType })


// 改变集结点设置 
export const changeRendezvousEnable = ({ commit }, rendezvousEnable) => commit('changeRendezvousEnable', { rendezvousEnable })

export const chageSelectPolicy = ({ commit }, selectPolicy) => commit('chageSelectPolicy', { selectPolicy })

export const changePolicy = ({ commit }, policy) => commit('changePolicy', { policy })

export const changePolicyUsers_Percent = ({ commit }, policyUsers_Percent) => commit('changePolicyUsers_Percent', { policyUsers_Percent })


// 开始时机配置 //0立即开始，1休眠相应秒数后开始，2特定日期时间开始
export const changeStartIndex = ({ commit }, startIndex) => commit('changeStartIndex', { startIndex })

export const changeSleepTime = ({ commit }, sleepTime) => commit('changeSleepTime', { sleepTime })

export const changeStartTime = ({ commit }, startTime) => commit('changeStartTime', { startTime })

// 停止配置

export const changeStopIndex = ({ commit }, stopIndex) => commit('changeStopIndex', { stopIndex })

export const changeStopUser = ({ commit }, stopUser) => commit('changeStopUser', { stopUser })

export const changeStopPercent = ({ commit }, stopPercent) => commit('changeStopPercent', { stopPercent })

export const changeRunTime = ({ commit }, runTime) => commit('changeRunTime', { runTime })

export const changeStopTime = ({ commit }, stopTime) => commit('changeStopTime', { stopTime })


// 循环配置
export const changeOnlineIndex = ({ commit }, onlineIndex) => commit('changeOnlineIndex', { onlineIndex })

export const changeLoopTimes = ({ commit }, loopTimes) => commit('changeLoopTimes', { loopTimes })
// ====================任务配置相关===============================================//

// ====================结果配置相关===============================================//
// 选中任务执行结果
export const activeTaskResult = ({ commit }, taskResult) => commit('activeTaskResult', { taskResult })

// 选中图表
export const activeChart = ({ commit }, chart) => commit('activeChart', { chart })

export const setOptionShow = ({ commit }) => commit('setOptionShow')

export const addchart = ({ commit }) => commit('addchart')

export const removeChart = ({ commit }, chart) => commit('removeChart', { chart })

// ====================结果配置相关===============================================//

// 用户详情选中任务   下面其实是一个函数简写 ({ commit }, detailTask)这个是一个function， commit('activeDetailTask', { detailTask })是执行代码
//detailTask是参数，下面的commit是调用store的方法activeDetailTask，传入detailTask参数
export const activeDetailTask = ({ commit }, detailTask) => commit('activeDetailTask', { detailTask })
export const activeDetailFailTask = ({ commit }, detailTask) => commit('activeDetailFailTask', { detailTask })
export const activeDetailOver5 = ({ commit }, detailTask) => commit('activeDetailOver5', { detailTask })
export const activeDetailError = ({ commit }, detailTask) => commit('activeDetailError', { detailTask })
export const activeDetailURL = ({ commit }, detailTask) => commit('activeDetailURL', { detailTask })
export const activeDetailFailURL = ({ commit }, detailTask) => commit('activeDetailFailURL', { detailTask })
export const changeTask = ({ commit }, detailTask) => commit('changeTask', { detailTask })