<template>
    <!-- <div class="row"> -->
    <div class="panel panel-default" @click="activeChart(line)" :class="{'active-chart':isActiveChart}">
        <div class="panel-heading">
            <h6 class="panel-title">
                    <span>{{getActiveTaskResult.name}}-{{line.name}}</span>
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-xs btn-danger" @click.stop="removeThisChart(line.name)"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <span>&nbsp;</span>
                    </div>
                    <div class="btn-group pull-right">
                        <button ref="popover" class="btn btn-xs" @click.stop="setChartOptionShow">Popover on bottom</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </h6>
        </div>
        <div ref="modal-option" class="modal fade" @mousemove="movedialog" @mouseup="dialogMoveAble=false">
            <div class="modal-dialog modal-drag-move" :style="{left:location.x+'px',top:location.y+'px'}">
                <div class="modal-content">
                    <div class="modal-header" @mousedown="dialogMoveAble=true">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <div class="param-block">
                            <div class="row" v-for="n in getRowByLines">
                                <div class="btn-group btn-group-justified">
                                    <label class="col-xs-3 btn btn-default" @click.stop="triggerResult(item)" v-for="(item,key) in getOneLineItems(n)">
                                        <div class="icheckbox_square-blue" :class="{checked:isActive(item)}"></div>{{item.name}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
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
import 'echarts/lib/component/dataZoom'
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

            // this.dialog = $(this.$refs['modal-option']).modal({
            //     backdrop: 'static'
            // })
        })
    },
    data() {
        return {
            // dialog: {}
            dialogMoveAble: false,
            location: {
                x: 50,
                y: 50
            },
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
                // dataZoom: [{
                //     id: 'dataZoomX',
                //     type: 'slider',
                //     xAxisIndex: [0]
                // }],
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
            this.chart.setOption(this.getOption, true)
            this.chart.resize()
        }
    },
    methods: {
        ...mapActions([
            'setOptionShow',
            'activeChart',
            'removeChart'
        ]),
        setChartOptionShow() {
            this.activeChart(this.line)
            $(this.$refs['modal-option']).modal({
                    backdrop: 'static'
                })
                // this.setOptionShow()
        },
        removeThisChart() {
            this.activeChart(this.line)
            this.removeChart(this.line)
        },
        triggerResult(item) {
            this.checked.exist(item.name) ? this.checked.remove(item.name) : this.checked.push(item.name)
        },
        getXAxis(line) {
            let result = []
            line.points.forEach(value => result.push(value.x))
            return result
        },
        getYAxis(line) {
            let result = []
            line.points.forEach(value => result.push(value.y))
            return result
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
        },
        movedialog(e) {
            if (this.dialogMoveAble) {
                this.location.x += e.movementX
                this.location.y += e.movementY
            }
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

.modal-dialog.modal-drag-move {
    cursor: move;
    position: absolute;
}

.param-block {
    /*opacity: .3;/*/
    height: 100%;
    width: 100%;
    z-index: 1041;
    /*background-color: gray;*/
    /*position: absolute;*/
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
