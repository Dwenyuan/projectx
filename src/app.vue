<template>
    <div>
        <script-manager></script-manager>
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>
<script>
import pageHeader from './components/page-header.vue'
import scriptView from './router/script-view.vue'
import scriptManager from './components/script-manager.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    replace: false,
    ready() {
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
        pageHeader,
        scriptView,
        scriptManager
    }
}
</script>
<style>
.well {
    margin-bottom: 0
}

html,
body {
    height: 100%;
}
</style>
