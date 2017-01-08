<template>
    <div>
        <upload-manager></upload-manager>
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>
<script>
import pageHeader from './components/page-header.vue'
import scriptView from './router/script-view.vue'
import uploadManager from './components/upload-manager.vue'
import chart from './router/charts.vue'
import summaryChart from './router/summary-task.vue'
import logView from './components/log-view.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    replace: false,
    mounted() {
        console.log(this.logoimg)
    },
    data() {
        return {
            text: 'vue'
        }
    },
    computed: mapGetters([
        'getScripts'
    ]),
    components: {
        chart,
        logView,
        pageHeader,
        scriptView,
        uploadManager,
        summaryChart
    }
}
</script>
<style>
.well {
    margin-bottom: 0;
}

html,
body {
    height: 100%;
}
</style>