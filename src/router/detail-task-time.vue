<template>
    <div class="panel panel-default">
        <div class="panel-body">
            
            <div ref="chart" id="mychart" class="chartsTest" style="min-height:200px"></div>
        </div>
    </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/scatter')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
export default {
    mounted() {
            this.$nextTick(() => {
                this.chart = echarts.init(this.$refs.chart)
                this.chart.setOption({
                    grid: {
                        left: '1%',
                        right: '3%',
                        bottom: '1%',
                        top: '2%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        showDelay: 0,
                        formatter: function(params) {
                            return '(' + params.value[0] + ', ' + params.value[1] + ')'
                        },
                        axisPointer: {
                            show: true,
                            type: 'cross',
                            lineStyle: {
                                type: 'dashed',
                                width: 1
                            }
                        }
                    },
                    toolbox: {
                        show: true,
                        x: 'center',
                        feature: {
                            mark: {
                                show: true
                            },
                            dataZoom: {
                                show: true
                            }
                        }
                    },
                    xAxis: [{
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            formatter: '{value} s'
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            formatter: '{value} ms'
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        name: '',
                        type: 'scatter',
                        large: true,
                        data: (function() {
                            var d = [];
                            var len = 100000;
                            var x = 0;
                            while (len--) {
                                x = (Math.random() * 10).toFixed(3) - 0;
                                d.push([
                                    x,
                                    //Math.random() * 10
                                    (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                                ]);
                            }
                            //console.log(d)
                            return [
                                [3, 22],
                                [4, 21],
                                [4, 1383]
                            ];
                        })()

                    }]
                })
                window.onresize = () => {
                    this.chart.resize()
                }
            })
        },
        data() {
            return {
                chart: {}
            }
        },
        methods: {}
}
</script>
