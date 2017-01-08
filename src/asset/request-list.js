// 请求列表
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { mapGetters } from 'vuex'

// export const uploadScript = (params) => Vue.axios.post('uploadscirpt',{params})

export const detailGet = (params) => Vue.axios.get('http://127.0.0.1/Cloud/analysis/getUserPoints', { params: params })

/**
 * 删除测试配置，支持删除多个  
 * {id:string} //多个ID以逗号分隔
 */
export const senceDelete = (params) => Vue.axios.get('controller/delete', { params })

/**
 * 获取统计数据与日志 每秒调用一次 
 * {
 *  testcase:string,
 *  ave:Boolean,
 *  readAll:Boolean 
 *  readLog:Boolean
 * }
 */
export const getData = (params) => Vue.axios.get('controller/getData', { params })

export const detailGetLine = (param) => Vue.axios.get('http://127.0.0.1/Cloud/analysis/getLine', {params:param})

/**
 * 获取当前正在运行的测试场景 
 */
export const getRunning = (params) => Vue.axios.get('controller/getRunning', { params })

export const getChangePoints = (param) => Vue.axios.get('http://127.0.0.1/Cloud/config/getChangePoints', {params:param})

/**
 * 获取controller的测试配置列表，按时间顺序排序 如果只是获取某一个，则需要传id参数 
 * {id:string}
 */
export const getlist = (params) => Vue.axios.get('controller/list', { params })

/**
 * 强制停止运行测试
 * {testcase:Boolean}
 */
export const quickStopSence = (params) => Vue.axios.get('controller/quickStop', { params })

/**
 * 读取某个配置，加载测试配置
 * {id:string}
 */
export const readSence = (params) => Vue.axios.get('controller/read', { params })

/**
 * 保存配置，包括新建与修改
 * {id:string}
 */
export const saveSence = (params) => Vue.axios.get('controller/save', { params })

/**
 * 开始运行 运行的配置，运行前先调用controller/save保存配置，后台返回成功的id
 * {id:string}
 */
export const startSence = (params) => Vue.axios.get('controller/start', { params })

/**
 * 运行中的测试用例名称 
 * {testcase:string}
 */
export const stopSence = (params) => Vue.axios.get('controller/stop', { params })


/**
 * 获取运行的历史测试结果的统计数据
 * {testcase:string} 
 */
export const getHistory = (params) => Vue.axios.get('getHistory', { params })

/**
 * 查看历史记录（已经运行停止），获取日志总数与第一页的数据，获取总数后可以得到页数（每页100个日志） 支持过滤条件 
 * 返回json带total与logs（数组，第一页的日志）
 * {
 *  testcase:string,
 *  start:string,
 *  end:string,
 *  log:string,
 *  origin:string,
 *  user:string,
 *  des:string
 * }
 */
export const getLog = (params) => Vue.axios.get('getLog', { params })

/**
 * 打开用户详情后，过滤选中某个用户，获取该用户运行的详情的数据，查询失败原因，
 * 或运行的每个HTTP请求的时间 上传的参数都是在界面已经存在，只需原封不动带上来agent file length 
 * {
 *  testcase:string,
 *  agent:string,
 *  file:string,
 *  length:string
 * }
 */
export const getOneUser = (params) => Vue.axios.get('getOneUser', { params })

/**
 * 查看某一页的日志数据，页数通过前面获取 
 * {
 *  testcase:string,
 *  page:int
 * }
 */
export const getPageLog = (params) => Vue.axios.get('getPageLog', { params })

/**
 * 获取运行完成输出的汇总报告 
 * {
 *  testcase:string
 * }
 */
export const getReport = (params) => Vue.axios.get('getReport', { params })

/**
 * 获取用户详情的数据 action值含义： 
 * 0表示获取任务汇总(包括事务、用户、URL)，
 * 1表示成功用户时间图、2表示失败用户时间图、
 * 3表示事务超过5毫秒时间图 
 * 4表示某种失败原因的每秒失败数、
 * 5表示URL失败每秒失败数的时间图、
 * 6表示URL时间图、
 * 16表示URL每秒个数（成功与失败）图 
 * 7表示读取用户汇总信息，有多少个、
 * 8表示读取某一页的用户信息、9表示读取特定用户信息、
 * 19获取某个用户的运行日志
 * {
 *  testcase:string,
 *  task:string,
 *  action:string
 * } 
 */
export const getUserDetail = (params) => Vue.axios.get('getUserDetail', { params })

export const getDetailUsers = (param) => Vue.axios.get('http://127.0.0.1/Cloud/analysis/getDetailUsers', {params:param})

/**
 * 
 */
export const getUserFailLog = (params) => Vue.axios.get('getUserFailLog', { params })

/**
 * 用户详情里，查看某个用户的运行日志（开启了debug打印虚拟用户与服务器交互的http数据） 需要先点击获取用户详情数据 
 * {
 *  testcase:string,
 *  start:string,
 *  time:string,
 *  agent:string,
 *  user:string,
 *  print:string,
 * }
 * 
 */
export const getUserLog = (params) => Vue.axios.get('getUserLog', { params })

/**
 * 获取运行的历史列表，按顺序排序 如果只是获取某一个，则需要传id参数 
 */
export const list = (params) => Vue.axios.get('list', { params })

/**
 * 删除某个文件，或多个文件 多个文件已',' 分割
 * {
 *  id:string
 * }
 */
export const deleteScript = (params) => Vue.axios.get('scripter/delete', { params })

/**
 * 获取脚本列表，按时间顺序排序 如果只是获取某一个，则需要传id参数 
 * {
 *  id:?string
 * }
 */
export const listScript = (params) => Vue.axios.get('scripter/list', { params })

/**
 * 修改备注或名字 
 * {
 *  id:string,
 *  filename:string,
 *  des:string,
 *  type:string,
 * }
 */
export const modifyScript = (params) => Vue.axios.get('scripter/modify', { params })

/**
 * 读取某个脚本文件或者参数文件 
 * {
 *  id:string,
 *  type:string
 * }
 */
export const readScript = (params) => Vue.axios.get('scripter/read', { params })


// export const uploadScript = (params) => Vue.axios.get('scripter/upload',{params})

export const test = (params) => Vue.axios.get('test', { params })

/**
 * 验证码？
 */
export const getCodeuser = (params) => Vue.axios.get('user/getCode', { params })

/**
 * 登陆？
 */
export const loginuser = (params) => Vue.axios.get('user/login', { params })

export const registryuser = (params) => Vue.axios.get('user/registry', { params })

/**
 * 发送手机验证码
 */
export const sendCodeuser = (params) => Vue.axios.get('user/sendCode', { params })