<template>
    //v-if为true就表示显示，为false表示隐藏
    <div class="panel-body" v-if="getDetailResult.error && getDetailResult.error.length > 0">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th>任务</th>
                    <th>总数</th>
                    <th>请求个数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.error" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.task}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.urls}}</td>                    
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {},
    computed: mapGetters([
        'getDetailResult'//调用getter.js
    ]),
    data() {
        return {
            activeIndex: -1,
            chart: {}
        }
    },
    methods: {
        ...mapActions([
            'activeDetailError'//调用
        ]),
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailError(item)//调用自己的方法
        }
    }
}
</script>
