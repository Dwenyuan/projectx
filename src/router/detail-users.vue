<template>
    //v-if为true就表示显示，为false表示隐藏
    <div class="panel-body" v-if="getDetailResult.error && getDetailResult.error.length > 0">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead style="background-color: #F3F4F6">
                <tr>
                    <th></th>
                    <th>时间</th>
                    <th>o</th>
                    <th>l</th>
                    <th>是</th>
                    <th>失</th>
                    <th>运行</th>
                    <th>与</th>
                    <th>gg</th>
                    <!-- <th></th>
                    <th>用户启动时间</th>
                    <th>用户序号</th>
                    <th>归属</th>
                    <th>是否成功</th>
                    <th>失败原因</th>
                    <th>运行总时间</th>
                    <th>与录制差值</th>
                    <th>请求总数</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in getDetailResult.error" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.task}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.urls}}</td>                    
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
            'activeDetailError'//调用
        ]),
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.activeDetailError(item)//调用自己的方法
        }
    }
}
</script>
