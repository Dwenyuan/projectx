<template>
    <!--v-if为true就表示显示，为false表示隐藏-->
    <div class="panel-body" v-if="getDetailResult.url && getDetailResult.url.length > 0">
        <!--http才需要添加这些按钮-->
        <div v-if="getDetailResult.hostList && getDetailResult.hostList.length > 0">
            类型过滤：
            <label style="padding-left: 20px; ">
                <div :class="filter===''?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter=''" />
                <span style="font-size: 16px" @click="filter=''">所有</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='10'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='10'" />
                <span style="font-size: 16px" @click="filter='10'">后台动态</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='1'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='1'" />
                <span style="font-size: 16px" @click="filter='1'">html</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='2'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='2'" />
                <span style="font-size: 16px" @click="filter='2'">js</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='3'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='3'" />
                <span style="font-size: 16px" @click="filter='3'">css</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='4'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='4'" />
                <span style="font-size: 16px" @click="filter='4'">图片</span>
            </label>
            <label style="padding-left: 60px;">
                <div :class="filter==='5'?'iradio_flat-blue checked':'iradio_flat-blue'" @click="filter='5'" />
                <span style="font-size: 16px" @click="filter='5'">其他</span>
            </label>
            <div v-if="getDetailResult.host">
                Host:
                <label style="padding-left: 61px; ">
                    <div :class="host===''?'iradio_flat-blue checked':'iradio_flat-blue'" @click="host=''" />
                    <span style="font-size: 16px" @click="host=''">所有</span>
                </label>
                <label v-for="(item,key) in getDetailResult.hostList" :style="key==0?'padding-left: 60px':'padding-left: 113px'">
                    <div :class="host===item?'iradio_flat-blue checked':'iradio_flat-blue'" @click="host=item" />
                    <span style="font-size: 16px" @click="host=item">{{item}}</span>
                </label>
            </div>
        </div>
        <div v-if="(getDetailResult.belong && getDetailResult.belong.length > 0) || (getDetailResult.area && getDetailResult.area.length > 0)">
            <span v-if="getDetailResult.area && getDetailResult.area.length > 0">
                归属区域:
                <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
    Dropdown
    <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
            </ul>
        </div>
        </span>
        <span v-if="getDetailResult.belong && getDetailResult.belong.length > 0">
            归属事务:
            </span>
        <label style="padding-left: 30px; " v-if="getDetailResult.belong && getDetailResult.belong.length > 0">
            <div :class="transaction===''?'iradio_flat-blue checked':'iradio_flat-blue'" @click="transaction=''" />
            <span style="font-size: 16px" @click="transaction=''">所有</span>
        </label>
        <label v-for="(item,key) in getDetailResult.belong" :style="key==0?'padding-left: 60px':'padding-left: 113px'">
            <div :class="transaction===item?'iradio_flat-blue checked':'iradio_flat-blue'" @click="transaction=item" />
            <span style="font-size: 16px" @click="transaction=item">{{item}}</span>
        </label>
    </div>
    <table class="table table-striped table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th @click="activeColumn(0)" :class="(order===0||order===-1)?'bg-primary':'none'"></th>
                <th @click="activeColumn(1)" :class="order===1?'bg-primary':'none'">名称</th>
                <th v-if="getDetailResult.method" @click="activeColumn(2)" :class="order===2?'bg-primary':'none'">方法</th>
                <th v-if="getDetailResult.hostList && getDetailResult.hostList.length > 0" @click="activeColumn(3)" :class="order===3?'bg-primary':'none'">类型</th>
                <th v-if="getDetailResult.host" @click="activeColumn(4)" :class="order===4?'bg-primary':'none'">Host</th>
                <th v-if="getDetailResult.area && getDetailResult.area.length>0" @click="activeColumn(5)" :class="order===5?'bg-primary':'none'">任务</th>
                <th @click="activeColumn(6)" :class="order===6?'bg-primary':'none'">总数</th>
                <th @click="activeColumn(7)" :class="order===7?'bg-primary':'none'">成功数</th>
                <th>比率%</th>
                <th>失败数</th>
                <th @click="activeColumn(10)" :class="order===10?'bg-primary':'none'">最大时间</th>
                <th @click="activeColumn(11)" :class="order===11?'bg-primary':'none'">平均值</th>
                <th @click="activeColumn(12)" :class="order===12?'bg-primary':'none'">最小值</th>
                <th v-if="getDetailResult.time" @click="activeColumn(13)" :class="order===13?'bg-primary':'none'">录制值</th>
                <th @click="activeColumn(14)" :class="order===14?'bg-primary':'none'">90%比例</th>
                <th @click="activeColumn(15)" :class="order===15?'bg-primary':'none'">10%</th>
                <th @click="activeColumn(16)" :class="order===16?'bg-primary':'none'">TCP/DNS</th>
                <th @click="activeColumn(17)" :class="order===17?'bg-primary':'none'">首分片</th>
                <th @click="activeColumn(18)" :class="order===18?'bg-primary':'none'">剩余分片</th>
                <th @click="activeColumn(19)" :class="order===19?'bg-primary':'none'">平均长度</th>
            </tr>
        </thead>
        <tbody>
            <!--冒号表示双引号里面使用JS执行,{}表示是一个对象-->
            <tr v-for="(item,key) in filterTable(getDetailResult.url, order, filter, host, transaction, area)" @click="activeTask(item,key)" :class="{info:activeIndex === key}" data-toggle="tooltip" :title="'序号:'+(key+1)+'  80%时间: '+item.percent[2]+', 20%时间: '+item.percent[3]+', 70%时间: '+item.percent[4]+', 30%时间: '+item.percent[5]+'\r\n           60%时间: '+item.percent[6]+', 40%时间: '+item.percent[7]+', 50%时间: '+item.percent[8]+', 50%时间: '+item.percent[9]">
                <td>{{returnIndex(item, key + 1)}}</td>
                <td>{{item.name}}</td>
                <td v-if="getDetailResult.method">{{item.method}}</td>
                <td v-if="getDetailResult.hostList && getDetailResult.hostList.length > 0">{{getHTTPType(item.httpType)}}</td>
                <td v-if="getDetailResult.host">{{item.host}}</td>
                <td v-if="getDetailResult.area && getDetailResult.area.length>0">{{item.task}}</td>
                <td>{{item.total}}</td>
                <td>{{item.success}}</td>
                <td>{{caclPercent(item.success, item.total)}}</td>
                <td>{{item.total - item.success}}</td>
                <td>{{item.max}} ms</td>
                <td>{{item.ave}}</td>
                <td>{{item.min}}</td>
                <td v-if="getDetailResult.time">{{item.rTime}} ms</td>
                <td>{{item.percent[0]}} ms</td>
                <td>{{item.percent[1]}}</td>
                <td>{{caclAve(item.dnsTime+item.tcp, item.total)}} ms</td>
                <td>{{caclAve(item.first, item.total)}}</td>
                <td>{{caclAve(item.left, item.total)}} ms</td>
                <td>{{item.aveBytes}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
require('../asset/icheck/skins/square/blue.css')
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {},
    computed: mapGetters([
        'getDetailResult' //调用getter.js
    ]),
    data() {
        return {
            activeIndex: -1,
            order: -1,
            filter: '',
            host: '',
            transaction: '',
            area: [],
            orderAsc: true,
            chart: {}
        }
    },
    methods: {
        ...mapActions([
            'activeDetailURL' //调用
        ]),
        returnIndex(value, index) {
            if (value.index === undefined) {
                value.index = index
                if (value.httpType == 0 || value.httpType == 5 || value.httpType > 10) {
                    value.httpType = 5
                }
            }
            return value.index
        },
        // 计算失败百分比
        caclPercent(value, total) {
            if (total === 0) {
                return '0%'
            }
            let result = (value / total) * 100
            return `${result.toFixed(1)}`
        },
        caclAve(value, total) {
            if (total === 0) {
                return '0'
            }
            let result = (value / total)
            return `${result.toFixed(0)}`
        },
        getHTTPType(value) {
            if (value === 1) {
                return 'html'
            } else if (value === 2) {
                return 'js'
            } else if (value === 3) {
                return 'css'
            } else if (value === 4) {
                return '图片'
            } else if (value === 5) {
                return '其他'
            } else if (value === 10) {
                return '后台'
            } else {
                return '其他'
            }
        },
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailURL(item) //调用自己的方法
        },
        activeColumn(value) {
            this.orderAsc = !this.orderAsc;
            this.order = value;
        },
        filterTable(old, order, filter, host, transaction, area) {
            if (order === -1 && filter.length === 0 && transaction.length === 0 && host.length == 0 && area.length == 0) {
                return old
            }
            var newObj = [];
            for (var i = 0; i < old.length; i++) { //新建一个对象，如果是对old进行排序会导致old发生变化导致重新调用filterTable死循环
                if (filter.length === 0 && transaction.length === 0 && host.length === 0 && area.length == 0) { //没过滤，只排序
                    newObj.push(old[i]);
                } else {
                    try {
                        var isFilter = false;
                        var isHost = false;
                        var isTran = false;
                        var inarea = false;


                        if (filter.length === 0 || parseInt(filter) === old[i].httpType) { //过滤类型
                            isFilter = true;

                        }

                        if (isFilter && (transaction.length === 0 || old[i].belong.indexOf(transaction) >= 0)) { //过滤事务
                            isTran = true;
                        }

                        if (isFilter && isTran && (host.length === 0 || old[i].host.indexOf(host) === 0)) { //过滤域名
                            isHost = true;
                        }

                        if (isFilter && isHost && isTran && (area.length===0 || area.indexOf(old[i].task) >= 0)) {
                            inarea = true;
                        }

                        if (isFilter && isHost && isTran && inarea) {
                            newObj.push(old[i]);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            if (order === -1) { //没点击过排序
                return newObj;
            }
            //按年龄从小到大排序
            let _this = this
            newObj.sort(
                function(a, b) {
                    try {
                        if (order === 0) { //第一个是升序
                            return (_this.orderAsc ? (a.index - b.index) : (b.index - a.index));
                        } else if (order === 6) {
                            return (_this.orderAsc ? (a.total - b.total) : (b.total - a.total));
                        } else if (order === 7) {
                            return (_this.orderAsc ? (a.success - b.success) : (b.success - a.success));
                        } else if (order === 10) {
                            return (_this.orderAsc ? (a.max - b.max) : (b.max - a.max));
                        } else if (order === 11) {
                            return (_this.orderAsc ? (a.ave - b.ave) : (b.ave - a.ave));
                        } else if (order === 12) {
                            return (_this.orderAsc ? (a.min - b.min) : (b.min - a.min));
                        } else if (order === 13) {
                            return (_this.orderAsc ? (a.rTime - b.rTime) : (b.rTime - a.rTime));
                        } else if (order === 14) {
                            return (_this.orderAsc ? (a.percent[0] - b.percent[0]) : (b.percent[0] - a.percent[0]));
                        } else if (order === 15) {
                            return (_this.orderAsc ? (a.percent[1] - b.percent[1]) : (b.percent[1] - a.percent[1]));
                        } else if (order === 16) {
                            return (_this.orderAsc ? (a.tcp - b.tcp) : (b.tcp - a.tcp));
                        } else if (order === 17) {
                            return (_this.orderAsc ? (a.first - b.first) : (b.first - a.first));
                        } else if (order === 18) {
                            return (_this.orderAsc ? (a.left - b.left) : (b.left - a.left));
                        } else if (order === 19) {
                            return (_this.orderAsc ? (a.aveBytes - b.aveBytes) : (b.aveBytes - a.aveBytes));
                        } else if (order === 3) {
                            return (_this.orderAsc ? (a.httpType - b.httpType) : (b.httpType - a.httpType));
                        } else if (order === 2) {
                            return (a.method == b.method) ? 0 : 1;
                        } else if (order === 4) {
                            return (_this.orderAsc ? ((a.host == b.host) ? 1 : -1) : ((a.host == b.host) ? -1 : 1));
                        } else if (order === 5) {
                            return (_this.orderAsc ? ((a.task == b.task) ? 1 : -1) : ((a.task == b.task) ? -1 : 1));
                        } else if (order === 1) {
                            return (_this.orderAsc ? ((a.name == b.name) ? 0 : 1) : ((a.name == b.name) ? 0 : -1));
                        }
                    } catch (err) {
                        console.log(err);
                    }

                    return 0;
                }
            );
            return newObj
        }
    }
}
</script>
