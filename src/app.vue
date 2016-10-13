<template>
    {{getScripts}}
    <page-header></page-header>
    <router-view></router-view>
    <!--<script-view></script-view>-->
</template>
<script>
import PageHeader from './components/page-header.vue'
import scriptView from './router/script-view.vue'
import store from './vuex/store'
import {
    getScripts
} from './vuex/getters'
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
    store,
    vuex: {
        getters: {
            getScripts
        }
    },
    components: {
        PageHeader,
        scriptView
    }
}
</script>
<style>
.well {
    margin-bottom: 0
}
</style>
