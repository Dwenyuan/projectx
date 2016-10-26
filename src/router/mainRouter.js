import Vue from 'vue'
import VueRouter from 'vue-router'
import scriptView from './script-view.vue'
import chart from './charts.vue'
import scene from './scene.vue'
import report from './report.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/script', component: scriptView },
    { path: '/scene', component: scene },
    { path: '/report', component: report },
    { path: '/test', component: chart },
    { path: '/', component: scriptView }
]

export default new VueRouter({
    routes
})
