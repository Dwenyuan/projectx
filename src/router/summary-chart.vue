<template>
    <div class="panel-body">
        <div ref="summary" style="min-height:400px;"></div>
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <th>任务</th>
                <th>状态</th>
                <th>成功数</th>
                <th>失败数</th>
                <th>运行中</th>
                <th>停止</th>
                <th>失败百分比</th>
                <th>速率</th>
            </thead>
            <tbody>
                <tr v-for="item in getTaskResult.tasks">
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
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    mounted() {
            this.$nextTick(() => {
                this.chart = echarts.init(this.$refs.summary)
                let index = ["任务", "状态", "成功数", "失败数", "运行中", "停止", "失败百分比", "速率"]
                this.chart.setOption({
                    title: {
                        text: '汇总'
                    },
                    legend: {
                        show: true,
                        data: index
                    },
                    xAxis: {
                        data: ["任务", "状态", "成功数", "失败数", "运行中", "停止", "失败百分比", "速率"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [50]
                    }, {
                        name: '销量',
                        type: 'bar',
                        data: [200]
                    }, {
                        name: '销量',
                        type: 'bar',
                        data: [100]
                    }, {
                        name: '销量',
                        type: 'bar',
                        data: [50]
                    }, {
                        name: '销量',
                        type: 'bar',
                        data: [50]
                    }, {
                        name: '销量',
                        type: 'bar',
                        data: [50]
                    }]
                })
                window.onresize = () => {
                    this.chart.resize()
                }
            })
        },
        computed: mapGetters([
            'getTaskResult'
        ]),
        data() {
            return {
                chart: {}
            }
        },
        methods: {
            // 计算失败百分比
            caclPercent(line) {
                if (!(line[0].total + line[1].total)) {
                    return '0%'
                }
                let result = (line[1].total / (line[0].total + line[1].total)) * 100
                return `${result.toFixed(2)}%`
            }
        }
}
</script>
