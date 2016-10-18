<template>
    <div>
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>
<script>
import pageHeader from './components/page-header.vue'
import scriptView from './router/script-view.vue'
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
        scriptView
    }
}
</script>
<style>
.well {
    margin-bottom: 0
}
</style>
