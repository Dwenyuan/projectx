<template>
    //v-if为true就表示显示，为false表示隐藏
    <div class="panel-body" v-if="getDetailResult.failedTask && getDetailResult.failedTask.length > 0">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th>总数</th>
                    <th>失败数</th>
                    <th>比率</th>
                    <th>响应错误</th>
                    <th>响应超时</th>
                    <th>TCP失败</th>
                    <th>断言失败</th>
                    <th>SSL失败</th>
                    <th>服务器关闭TCP</th>
                    <th>其他</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.failedTask" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.total - item.success}}</td>
                    <td>{{caclPercent(item.total - item.success, item.total)}}</td>        
                    <td>{{item.failed[0]}}</td>
                    <td>{{item.failed[1]}}</td>
                    <td>{{item.failed[2]}}</td>
                    <td>{{item.failed[3]}}</td>
                    <td>{{item.failed[7]}}</td>
                    <td>{{item.failed[5]}}</td>
                    <td>{{item.failed[4] + item.failed[6] + item.failed[8]}}</td>
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
            'activeDetailFailTask'//调用
        ]),
        // 计算失败百分比
        caclPercent(value, total) {
            if (total === 0) {
                return '0%'
            }
            let result = (value / total) * 100
            return `${result.toFixed(2)}%`
        },
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailFailTask(item)//调用自己的方法
        }
    }
}
</script>
