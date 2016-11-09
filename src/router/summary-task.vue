<template>
    <div class="panel-body">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>任务</th>
                    <th>状态</th>
                    <th>成功数</th>
                    <th>失败数</th>
                    <th>运行中</th>
                    <th>停止</th>
                    <th>失败百分比</th>
                    <th>速率</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getTaskResult.tasks" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{item.name}}</td>
                    <td>{{item.state}}</td>
                    <td>{{item.lines[0].total}}</td>
                    <td>{{item.lines[1].total}}</td>
                    <td>{{item.lines[2].total}}</td>
                    <td>{{item.lines[3].total}}</td>
                    <td>{{caclPercent(item.lines)}}</td>
                    <td>{{item.lines[0].total}}</td>
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
        'getTaskResult'
    ]),
    data() {
        return {
            activeIndex: 0,
            chart: {}
        }
    },
    methods: {
        ...mapActions([
            'activeTaskResult'
        ]),
        // 计算失败百分比
        caclPercent(line) {
            if (!(line[0].total + line[1].total)) {
                return '0%'
            }
            let result = (line[1].total / (line[0].total + line[1].total)) * 100
            return `${result.toFixed(2)}%`
        },
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeTaskResult(item)
        }
    }
}
</script>
