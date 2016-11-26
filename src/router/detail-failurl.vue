<template>
    //v-if为true就表示显示，为false表示隐藏
    <div class="panel-body" v-if="getDetailResult.urlFailed && getDetailResult.urlFailed.length > 0">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th v-if="getDetailResult.method">方法</th>
                    <th v-if="getDetailResult.host">Host</th>
                    <th v-if="getDetailResult.area">任务</th>   
                    <th v-if="getDetailResult.record">录制值</th>
                    <th>总数</th>                    
                    <th>失败</th> 
                    <th>比率</th> 
                    <th v-if="getDetailResult.code">响应错误</th>   
                    <th v-if="getDetailResult.over">超时</th>        
                    <th v-if="getDetailResult.tcp">TCP失败</th>         
                    <th v-if="getDetailResult.tcp3">TCP>3秒</th>
                    <th v-if="getDetailResult.over2">大于录制2秒</th>   
                    <th v-if="getDetailResult.serverTcp">系统关闭TCP</th>
                    <th v-if="getDetailResult.other">其他</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.urlFailed" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td v-if="getDetailResult.method">{{item.method}}</td>
                    <td v-if="getDetailResult.host">{{item.host}}</td>
                    <td v-if="getDetailResult.area">{{item.task}}</td>
                    <td v-if="getDetailResult.record">{{item.rCode}}</td>
                    <td>{{item.total}}</td>               
                    <td>{{item.total - item.success}}</td>
                    <td>{{caclPercent(item.total - item.success, item.total)}}</td>        
                    <td v-if="getDetailResult.code">{{item.failedType.code}}</td>   
                    <td v-if="getDetailResult.over">{{item.failedType.time}}</td>        
                    <td v-if="getDetailResult.tcp">{{item.failedType.tcp}}</td>         
                    <td v-if="getDetailResult.tcp3">{{item.failedType.tcpSyn}}</td>
                    <td v-if="getDetailResult.over2">{{item.failedType.over}}</td>   
                    <td v-if="getDetailResult.serverTcp">{{item.failedType.serverTcp}}</td>
                    <td v-if="getDetailResult.other">{{item.failedType.other}}</th>
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
        'getDetailResult'//调用getter.js
    ]),
    data() {
        return {
            activeIndex: -1,
            chart: {}
        }
    },
    methods: {
        ...mapActions([
            'activeDetailFailURL'//调用
        ]),
        // 计算失败百分比
        caclPercent(value, total) {
            if (total === 0) {
                return '0%'
            }
            let result = (value / total) * 100
            return `${result.toFixed(2)}%`
        },
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailFailURL(item)//调用自己的方法
        }
    }
}
</script>
