<template>
    <div class="panel-body" v-if="getDetailResult.successTask && getDetailResult.successTask.length > 0">
        <button class="btn btn-info">信息样式</button>
        <button class="btn btn-info">信息样式</button>        
        <br><br>
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr style="background-color: #F3F4F6">
                    <th></th>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                    <th>f</th>
                    <th>g</th>
                    <th>h 毫秒</th>
                    <th v-if="getDetailResult.time">i</th>
                    <th>j</th>
                    <th>k</th>
                    <th>80</th>
                    <th>20%</th>
                    <th>50%</th>
                    <th>50%</th>
                    <!-- <th></th>
                    <th>名称</th>
                    <th>总数</th>
                    <th>成功数</th>
                    <th>比率</th>
                    <th>失败数</th>
                    <th>最大时间</th>
                    <th>最小时间</th>
                    <th>平均值 毫秒</th>
                    <th v-if="getDetailResult.time">录制值</th>
                    <th>90%用户</th>
                    <th>10%用户</th>
                    <th>80%用户</th>
                    <th>20%用户</th>
                    <th>50%用户</th>
                    <th>50%用户</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.successTask" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.success}}</td>
                    <td>{{caclPercent(item.success, item.total)}}</td>
                    <td>{{item.total - item.success}}</td>
                    <td>{{item.max}}</td>
                    <td>{{item.min}}</td>
                    <td>{{item.ave}}</td>
                    <td v-if="getDetailResult.time">{{item.record}}</td>
                    <td>{{item.percent[0]}}</td>
                    <td>{{item.percent[1]}}</td>
                    <td>{{item.percent[2]}}</td>
                    <td>{{item.percent[3]}}</td>
                    <td>{{item.percent[8]}}</td>
                    <td>{{item.percent[9]}}</td>
                </tr>
            </tbody>
            <tfoot>
            <!-- 分页开始 -->
<div class="u-pages" style="margin-bottom:20px; margin-top:10px;">
 <ul>
     <li v-if="showPre" class="crt"><a v-on:click="jumpFirst(cur)"> &lt;&lt; </a></li>
     <li v-if="showPre" class="crt"><a v-on:click="minus(cur)"> &lt; </a></li>

     <template v-for="index in indexs" >
         <li class="{{classRenderer(index)}}">
             <a v-on:click="btnClick(index)" >{{index}}</a>
         </li>
     </template>

     <li v-if="showMoreTail" class="crt">..</li>
     <li class="{{classRenderer(pageNo)}}"><a @click="btnClick(pageNo)">{{pageNo}}</a></li>
     <li v-if="showTail" class="crt"><a v-on:click="plus(cur)">&gt;</a></li>
     <li v-if="showTail" class="crt"><a v-on:click="jumpTail(cur)">&gt;&gt;</a></li>

 </ul>
</div>
<!-- 分页结束 -->
        </tfoot>
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
            'activeDetailTask'//调用
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
            this.activeDetailTask(item)//调用自己的方法
        }
    }
}
</script>
