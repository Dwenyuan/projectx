// 获取该用户所有的脚本列表
export const getScripts = state => state.scripts //获取所有的脚本

export const getUploadOpiont = state =>state.uploadOption

// 获取当前选中的脚本
export const getActiveScript = state => state.activeScript //获取当前脚本

// 获取所有任务列表
export const getTasks = state => state.scene.testcaseTasks //获取的所有任务

//获取所有可能的模型 枚举列表
export const getModelTypesEnum = state => state.modelTypesEnum

// 获取集结点枚举列表
export const getRendezvousEnum = state =>state.rendezvousEnum

// 获取当前选中的任务
export const getActiveTask = state => state.activeTask //获取当前任务

// 获取所有的参数文件列表
export const getParamFile = state => state.params

// 获取当前选中的参数选项
export const getActiveParam = state => state.activeParam

// 获取该用户拥有的代理执行器
export const getAgents = state => state.agents

// 获取任务正在执行的时返回的数据
export const getTaskResult = state => state.taskResult

// 获取选中结果
export const getActiveTaskResult = state => state.activeTaskResult

// 获取选中的图表数据项
export const getActiveTaskLines = state => state.activeTaskLines

export const getChartData = state => state.taskResult

// 获取日志
export const getLogs = state => state.logs

// 当前显示多少个图表
export const getCharts = state => state.charts

// 获取选中的图表
export const getActiveChart = state=>state.activeChart

// 获取用户详情
export const getDetailResult = state => state.detailResult