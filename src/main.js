import Vue from 'vue'
import Resource from 'vue-resource'
import app from './app.vue'
import router from './router/mainRouter'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

import './styles.css'
import './asset/bootstrap/dist/css/bootstrap.min.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'
sync(store, router)
Vue.use(Resource)
const index = new Vue({ render: h => h(app), router, store }).$mount('#app')
