// 导入 Vue.js 和组件，进行测试

import Vue from 'vue'
import app from '../src/app.vue'
import router from '../src//router/mainRouter'
import store from '../src/vuex/store'
import util from '../src/asset/util.js'
import { sync } from 'vuex-router-sync'

Vue.config.debug = process.env.NODE_ENV !== 'production'
sync(store, router)
    // const index = new Vue({ render: h => h(app), router, store }).$mount('#app')
var index

import requestList from '../src/asset/request-list.js'
// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。
describe('app', () => {
    // 检查原始组件选项

    beforeEach(() => {
        index = new Vue({ render: h => h(app), router, store }).$mount(document.createElement('div'))
    })

    it('has a created hook', () => {
        expect(typeof app.data).toBe('function')
    })

    it('correctly sets the message when created', () => {
        expect(index.text).toBe('vue')
    })

})
