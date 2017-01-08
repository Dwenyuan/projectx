import Vue from 'vue'
import VueRouter from 'vue-router'
import scriptView from './script-view.vue'
import chart from './charts.vue'
import summaryChart from './summary-task.vue'
import logView from '../components/log-view.vue'
import scene from './scene.vue'
import report from './report.vue'
import detail from './detail.vue'
import agentList from '../components/agent-list.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/script', component: scriptView },
    { path: '/scene', component: scene },
    { path: '/report', component: report },
    { path: '/test', component: detail },
    { path: '/', component: scriptView }
]

export default new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savePosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})
