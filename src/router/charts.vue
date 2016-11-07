<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h6 class="panel-title">标题</h6>
        </div>
        <div class="panel-body">
            <div ref="chart" id="mychart" class="chartsTest" style="min-height:200px"></div>
        </div>
    </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    mounted() {
            this.$nextTick(() => {
                this.chart = echarts.init(this.$refs.chart)
                this.chart.setOption({
                    legend: {
                        show: true,
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
                window.onresize = ()=>{
                    this.chart.resize()
                }
            })
        },
        data() {
            return {
                chart: {}
            }
        },
        methods: {
        }
}
</script>
