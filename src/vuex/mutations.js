// ====================任务配置相关===============================================//
export const activeScript = (state, { script }) => state.activeScript = script

export const activeTask = (state, { task }) => state.activeTask = task


export const changeIsCaps = (state, { isCaps }) => state.activeTask.model.isCaps = isCaps

export const changeModelType = (state, { modelType }) => state.activeTask.model.modelType = modelType

export const changeTotalUsers = (state, { totalUsers }) => state.activeTask.model.totalUsers = totalUsers

export const changeCaps = (state, { caps }) => state.activeTask.model.caps = caps

export const changeLimit = (state, { limit }) => state.activeTask.model.limit = limit

export const changeKeepTime = (state, { keepTime }) => state.activeTask.model.keepTime = keepTime

export const changeStep = (state, { step }) => state.activeTask.model.step = step

export const changeChooseType = (state, { chooseType }) => state.activeTask.model.chooseType = chooseType

// 集结点设置
export const changeRendezvousEnable = (state, { rendezvousEnable }) => state.activeTask.rendezvous.rendezvousEnable = rendezvousEnable

export const chageSelectPolicy = (state, { selectPolicy }) => state.activeTask.rendezvous.selectPolicy = selectPolicy

export const changePolicy = (state, { policy }) => state.activeTask.rendezvous.policy = policy

export const changePolicyUsers_Percent = (state, { policyUsers_Percent }) => state.activeTask.rendezvous.policyUsers_Percent = policyUsers_Percent

// 开始时机配置 //0立即开始，1休眠相应秒数后开始，2特定日期时间开始
export const changeStartIndex = (state, { startIndex }) => state.activeTask.startConfig.startIndex = startIndex

export const changeSleepTime = (state, { sleepTime }) => state.activeTask.startConfig.sleepTime = sleepTime

export const changeStartTime = (state, { startTime }) => state.activeTask.startConfig.startTime = startTime

// 停止配置
export const changeStopIndex = (state, { stopIndex }) => state.activeTask.stopConfig.stopIndex = stopIndex

export const changeStopUser = (state, { stopUser }) => state.activeTask.stopConfig.stopUser = stopUser

export const changeStopPercent = (state, { stopPercent }) => state.activeTask.stopConfig.stopPercent = stopPercent

export const changeRunTime = (state, { runTime }) => state.activeTask.stopConfig.runTime = runTime

export const changeStopTime = (state, { stopTime }) => state.activeTask.stopConfig.stopTime = stopTime

// 循环配置
export const changeOnlineIndex = (state, { onlineIndex }) => state.activeTask.iteratorTimes.onlineIndex = onlineIndex

export const changeLoopTimes = (state, { loopTimes }) => state.activeTask.iteratorTimes.loopTimes = loopTimes

// ====================任务配置相关===============================================//












export const activeTaskResult = (state, { taskResult }) => state.activeTaskResult = taskResult

export const activeChart = (state, { chart }) => state.activeChart = chart

export const addchart = (state) =>
    state.charts.push({
        optionShow: false,
        checked: []
    })

export const removeChart = (state, { name }) => state.charts.remove(name)

export const setOptionShow = (state) => state.activeChart.optionShow = !state.activeChart.optionShow
