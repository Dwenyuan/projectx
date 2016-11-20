<template>
    <!-- <div class="row"> -->
    <div class="panel panel-default" @click="activeChart(line)" :class="{'active-chart':isActiveChart}">
        <div class="panel-heading">
            <h6 class="panel-title">
                    <span>{{getActiveTaskResult.name}}-{{line.name}}</span>
                    <button ref="popover" class="btn btn-xs btn-default pull-right" @click.stop="setChartOptionShow">Popover on bottom</button>
                </h6>
        </div>
        <div class="param-block" v-show="optionShow">
            <div class="row" v-for="n in getRowByLines">
                <div class="btn-group btn-group-justified">
                    <label class="col-xs-3 btn btn-warning" @click.stop="triggerResult(item)" :class="{active:isActive(item)}" v-for="(item,key) in getOneLineItems(n)">{{item.name}}</label>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <div ref="chart" id="mychart" class="chartsTest" style="min-height:200px"></div>
        </div>
    </div>
    <!-- </div> -->
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: ['line'],
    mounted() {
        this.$nextTick(() => {
            // return
            this.chart = echarts.init(this.$refs.chart)
            this.chart.setOption(this.getOption)
            window.onresize = () => {
                this.chart.resize()
            }
        })
    },
    data() {
        return {
            chart: {},
        }
    },
    computed: {
        ...mapGetters([
            'getActiveTaskResult',
            'getCharts',
            'getActiveChart',
        ]),
        // chart(){
        //     return this.line.chart
        // },
        checked() {
            return this.line.checked
        },
        optionShow() {
            return this.line.optionShow
        },
        isActiveChart() {
            return this.getActiveChart === this.line
        },
        // 获取复选框总共有几行
        getRowByLines() {
            return this.getActiveTaskResult.lines.length % 4 === 0 ? this.getActiveTaskResult.lines.length / 4 : this.getActiveTaskResult.lines.length / 4 + 1
        },
        getOption() {
            let series = []
            let _this = this
            let legend = []
            let checkedline = []
            checkedline = this.filterLines(this.checked)
            checkedline.forEach(value => {
                legend.push({
                    name: value.name
                });
                series.push({
                    name: value.name,
                    type: 'line',
                    data: _this.getYAxis(value)
                })
            })
            return {
                tooltip: {
                    show: true,
                    trigger: 'axis'
                },
                legend: {
                    show: true,
                    data: legend
                },
                xAxis: {
                    data: checkedline[0] ? this.getXAxis(checkedline[0]) : []
                },
                yAxis: {},
                series: series
            }
        }
    },
    watch: {
        getOption(newval) {
            this.chart.setOption(this.getOption)
            this.chart.resize()
        }
    },
    methods: {
        ...mapActions([
            'setOptionShow',
            'activeChart'
        ]),
        setChartOptionShow(){
            this.activeChart(this.line)
            this.setOptionShow()
        },
        triggerResult(item) {
            this.checked.exist(item.name) ? this.checked.remove(item.name) : this.checked.push(item.name)
        },
        getXAxis(line) {
            let result = []
            return line.points.x
        },
        getYAxis(line) {
            let result = []
            return line.points.y
        },
        isActive(item) { //判断当前俺就是否处于激活状态
            return this.checked.exist(item.name)
        },
        getOneLineItems(index) { //获取每一行的l复选 选项
            let start = (index - 1) * 4
            let end = start + 4
            return this.getActiveTaskResult.lines.slice(start, end)
        },
        // 从激活的task根据名字筛选出选中的lines
        filterLines(selected) {
            return this.getActiveTaskResult.lines.filter(value => selected.exist(value.name))
        }
    }
}
</script>
<style>
input[type="checkbox"] {
    display: none;
}

.active-chart {
    box-shadow: 2px 2px 2px rgba(55, 55, 55, .15);
}

.param-block {
    /*opacity: .3;/*/
    height: 100%;
    width: 100%;
    z-index: 1041;
    /*background-color: gray;*/
    position: absolute;
    /*margin-left: 100%;*/
}

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover > .dropdown-menu {
    display: block;
}

.dropdown-submenu > a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover > a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left > .dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
</style>
