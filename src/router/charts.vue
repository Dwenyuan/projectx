<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4>标题</h4>
        </div>
        <div class="panel-body">
            <div @resize="rechart" ref="chart" id="mychart" class="chartsTest" style="min-height:400px"></div>
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
                    baseOption: {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        xAxis: {
                            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'line',
                            data: [5, 20, 36, 10, 10, 20]
                        }]
                    },
                    media: [{
                        query: {
                            minAspectRatio: 1
                        },
                        option: {}
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
            rechart() {
            	console.log('div resize')
                // this.chart.resize()
            }
        }
}
</script>
