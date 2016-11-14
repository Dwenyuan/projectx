// 请求列表
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export const uploadScript = (param) => Vue.axios.post('uploadscirpt', param)
