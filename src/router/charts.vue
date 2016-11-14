<template>
    <div class="row">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h6 class="panel-title">
                    <span>{{getActiveTaskResult.name}}-{{line.name}}</span>
                    <button ref="popover" class="btn btn-xs btn-default pull-right">
                        Popover on bottom
                    </button>
                </h6>
            </div>
            <div class="test-block">
                <div class="row" v-for="n in getRowByLines">
                    <div class="btn-group btn-group-justified" data-toggle="buttons">
                        <label href="javascript:;" class="col-xs-3 btn btn-info" v-for="item in getOneLineItems(n)">
                            <input type="checkbox">{{item.name}}</label>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div ref="chart" id="mychart" class="chartsTest" style="min-height:200px"></div>
            </div>
        </div>
    </div>
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
    computed: {
        ...mapGetters([
            'getActiveTaskResult'
        ]),
        // 获取复选框总共有几行
        getRowByLines() {
            return this.getActiveTaskResult.lines.length % 4 === 0 ? this.getActiveTaskResult.lines.length / 4 : this.getActiveTaskResult.lines.length / 4 + 1
        },
        getXAxis() {
            let result = []
            // this.line.points.map((value) => result.push(value.x))
            return this.line.points.x
        },
        getYAxis() {
            let result = []
            // this.line.points.map((value) => result.push(value.y))
            return this.line.points.y
        },
        getOption() {
            return {
                legend: {
                    show: true,
                },
                xAxis: {
                    data: this.getXAxis
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    data: this.getYAxis
                }]
            }
        }
    },
    watch:{
        getOption(newval){
            this.chart.setOption(this.getOption)
            this.chart.resize()
        }
    },
    data() {
        return {
            chart: {}
        }
    },
    methods: {
        getOneLineItems(index) { //获取每一行的l复选 选项
            let start = (index - 1) * 4
            let end = start + 4
            return this.getActiveTaskResult.lines.slice(start, end)
        },
    }
}
</script>
<style>
.test-block {
    opacity: .3;
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
