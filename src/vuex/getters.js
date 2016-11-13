// 获取该用户所有的脚本列表
export const getScripts = state => state.scripts //获取所有的脚本

// 获取当前选中的脚本
export const getActiveScript = state => state.activeScript //获取当前脚本

// 获取所有任务列表
export const getTasks = state => state.tasks //获取的所有任务

// 获取当前选中的任务
export const getActiveTask = state => state.activeTask //获取当前任务

// 获取所有的参数文件列表
export const getArgFile = state => state.args

// 获取当前选中的参数选项
export const getActiveArg = state => state.activeArg

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
