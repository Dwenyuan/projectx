<template>
    <div class="panel">
        <div class="panel-default" >
            <div ref="chart" id="mychart" class="chartsTest" :style="{'height':myHeight + 'px'}"></div>
        </div>
        <div>
            <button type="button" @click="addChart()">c1</button>
            First name:&nbsp;
            <input type="text" name="startTime" v-model="startTime" style="width:80px"> &nbsp;--&nbsp;
            <input type="text" name="endTime" v-model="endTime" style="width:80px"/>秒&nbsp;&nbsp;&nbsp;&nbsp;First name:&nbsp;
            <input type="text" name="startRange" v-model="startRange" style="width:80px"/> &nbsp;--&nbsp;
            <input type="text" name="endRange" v-model="endRange" style="width:80px"/> &nbsp;&nbsp;&nbsp;&nbsp;First name:
            <select name="limit" v-model="limit">
                <option v-for="option in limitPoints">
                 {{ option }}
                </option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;First name:
            <input type="text" name="manyOne" v-model="manyOne" style="width:60px"/>
            <button type="submit" class="btn btn-default" @click="refreshPoints()">应用</button>
        </div>
    </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/scatter')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/dataZoom')
import {
    detailGet,
    detailGetLine,
    getChangePoints
} from '../asset/request-list'
export default {
    mounted() {
            this.myHeight = 800 ;
            this.myWidth = document.body.clientWidth;
            debugger
            this.$nextTick(() => {                
                this.chart = echarts.init(this.$refs.chart)
                this.refreshPoints();
                this.setLimit();
                window.onresize = () => {
                    this.chart.resize()
                }
            })
        },
        data() {
            return {
                points: [
                    [1, 1]
                ],
                points2: [
                    [2, 2]
                ],
                points3: [
                    [1,108],[2,0],[3,19],[4,20],[5,1527],[6,700],[8,16],[9,17]
                ],
                startTime: 0,
                endTime: 0,
                startRange: 0,
                endRange: 0,
                manyOne: 1,
                limit: '100000',
                limitPoints: [100000],
                isTime: true,
                isShow: false,
                testcase: 'abc_2016_10_29_15_46_23',
                task: 'test',
                total: 100,
                myHeight: 500,          
                myWidth: 1000,      
                chart: {}
            }
        },
        beforeDestory() {
            this.chart.dispose();
        },
        methods: {
            setLimit(){
                var _that = this;
                getChangePoints()
                     .then(function(result) {
                         _that.limitPoints  = result.data;                  
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            refreshPoints() {
                var param = {
                    userCode: 'lin',
                    testcase: this.testcase,
                    task: this.task,
                    total: this.total,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    startRange: this.startRange,
                    endRange: this.endRange,
                    manyOne: this.manyOne,
                    limit: this.limit,
                    isTime: this.isTime
                }
                var _that = this;
               // _that.changePoints(_that.points, _that.points2, ['s', 'f']);                
               detailGet(param)
                    .then(function(result) {
                        _that.points = result.data[0];
                        if (result.data.length > 1 && result.data[0]) {
                            _that.points2 = result.data[1];
                        }
                        else{
                             _that.points2 = [[]];
                        }
                        debugger
                        _that.changePoints(_that.points, _that.points2, ['s', 'f']);                                            
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            addChart(){
                var param = {
                    userCode: 'lin',
                    testcase: this.testcase,
                    task: this.task,
                    lineType: 5
                }
                var _that = this;
                // _that.changePointsAdd(_that.points, _that.points2, _that.points3, ['s', 'f','g'], 'xx', 200 - _that.myWidth);
                detailGetLine(param)
                    .then(function(result) {
                        _that.points3 = result.data.points;                        
                        debugger
                        _that.changePointsAdd(_that.points, _that.points2, _that.points3, ['s', 'f',result.data.name], result.data.yTitle, 200 - _that.myWidth);                                       
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            changePoints(points, points2, legend) {                
                this.chart.setOption({
                    legend: {
                        data: legend
                    },
                    dataZoom: [{
                        show: true,
                        start: 0,
                        end: 100,
                        height: 15
                    }, {
                        type: 'inside',
                        start: 0,
                        end: 100,
                        height: 15
                    }, {
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 15,
                        height: this.myHeight - 110,
                        showDataShadow: false,
                        left: '0%'
                    }],
                    grid: {//控制两边空白
                        x:80,
                        x2:30,
                        y:40,
                        y2:70
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
                        x: 'right',
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
                            formatter: '{value}'
                        },
                         name: '秒',
                        splitLine: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        name: '秒',                        
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        name: legend[0],
                        type: 'scatter',
                        large: true,
                        data: points
                    }, {
                        name: legend[1],
                        type: 'scatter',
                        large: true,
                        data: points2
                    }
                    ]
                })                
            },
            changePointsAdd(points, points2, points3, legend, yTitle, myWidth) {
                this.chart.setOption({
                    legend: {
                        data: legend
                    },
                    dataZoom: [{
                        show: true,
                        start: 0,
                        end: 100,
                        height: 15
                    }, {
                        type: 'inside',
                        start: 0,
                        end: 100,
                        height: 15
                    }, {
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 15,
                        height: this.myHeight - 110,
                        showDataShadow: false,
                        left: '0%'
                    }],                   
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
                    grid: {//控制两边空白
                        x:80,
                        x2:80,                        
                        y:40,
                        y2:70
                   },
                    toolbox: {
                        show: true,
                        x: 'right',
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
                            formatter: '{value}'
                        },
                        name: '',
                        splitLine: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        name: '秒',
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            formatter: '{value}',
                            inside: true
                        },
                        name: yTitle,
                        position: 'left',
                        splitLine: {
                            show: false
                        },
                        offset: myWidth
                    }
                    ],
                    series: [{
                        name: legend[0],
                        type: 'scatter',
                        large: true,
                        data: points
                    }, {
                        name: legend[1],
                        type: 'scatter',
                        large: true,
                        data: points2
                    }, {
                        name: legend[2],
                        type: 'line',
                        large: true,
                        data: points3,
                        yAxisIndex: 1
                    }
                    ]
                })
            }
        }
}
</script>
