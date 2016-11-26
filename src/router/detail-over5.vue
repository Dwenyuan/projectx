<template>
    //v-if为true就表示显示，为false表示隐藏
    <div class="panel-body" v-if="getDetailResult.over5 && getDetailResult.over5.length > 0">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>任务</th>
                    <th>名称</th>
                    <th>总数</th>                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.over5" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{item.task}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.total}}</td>                   
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
            'activeDetailOver5'//调用
        ]),
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailOver5(item)//调用自己的方法
        }
    }
}
</script>
