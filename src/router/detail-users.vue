<template>
    <div class="panel-body">
        <span>开始时间：</span>
        <input id="startTime" style="margin-bottom: 6px;line-height: 16px" type="date" v-bind:value="startTime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>结束时间：</span>
        <input id="endTime" style="margin-bottom: 6px;line-height: 16px" type="date" v-bind:value="endTime">&nbsp;&nbsp;&nbsp;
        <input style="width:80px;height:24px" type="button" value="查询" @click='doFilter()'>
        <div style="float: right">共&nbsp;<span>{{number}}</span>&nbsp;条</div>
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
                    <th>请求总数</th>
                    <th>网络端口</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in data" @click="activeTask(item,key)" :class="{info:activeIndex === key}">
                    <td>{{key + 1}}</td>
                    <td>{{item.start}}</td>
                    <td>{{item.user}}</td>
                    <td>{{item.agent}}</td>
                    <td>{{item.success}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.urls}}</td>
                </tr>
            </tbody>
        </table>
        <div style="width:100%">
        <div id="pagination" v-show="isshowPaging" style="text-align: center"></div>
        </div>
    </div>
    </div>
</template>
<script>
import {
    getDetailUsers
} from '../asset/request-list'
import '../asset/jqPaginator.js'
export default {
    props: [],
    mounted() {
        this.$nextTick(() => {   
            this.refreshTable();
        })
    },
    data() {
        return {
            testcase: 'abc_2016_10_29_15_46_23',
            task: 'test',
            agent: '',
            startTime: 0,
            endTime: 0,
            startRange: 0,
            endRange: 0,
            startRequest: 0,
            endRequest: 0,
            success: 0,
            failed: '',
            failType: 0,
            transaction: 0,
            request: 0,
            page: 1,

            activeIndex: -1,
            isshowPaging: false,
            number: 0,
            pages: 0,
            selected: {},
            des: '',
            data: []
        }
    },
    methods: {
        // 选中当前任务
        activeTask(item, index) {
            this.activeIndex = index
            this.selected = item
        },
        doFilter(){
            this.isshowPaging = false;
            this.page = 1;
            this.activeIndex= -1,
            this.selected = '';
            this.pages = 0;
            this.number = 0;
            this.des = '';
            this.refreshTable();
        },
        refreshTable() {
            var param = {
                userCode: 'lin',
                testcase: this.testcase,
                task: this.task,
                startTime: this.startTime,
                endTime: this.endTime,
                startRange: this.startRange,
                endRange: this.endRange,
                startRequest: this.startRequest,
                endRequest: this.endRequest,
                success: this.success,
                failed: this.failed,
                failType: this.failType,
                transaction: this.transaction,
                request: this.request,
                page: this.page
            }
            var _that = this;
            var result = {
des: "xxxx",
list:  [
 {
agent: "abc",
diff: 0,
file: 0,
len: 1227,
port: 0,
row: 1,
start: 0,
success: 0,
time: _that.page,
urls: 48,
user: 2
},
 {
agent: "abc",
diff: 0,
file: 1231,
len: 1227,
port: 0,
row: 2,
start: 2,
success: 0,
time: 19,
urls: 48,
user: 5
},
 {
agent: "abc",
diff: 0,
file: 2462,
len: 1227,
port: 0,
row: 3,
start: 3,
success: 0,
time: 22,
urls: 48,
user: 7
},
 {
agent: "abc",
diff: 0,
file: 3693,
len: 1227,
port: 0,
row: 4,
start: 3,
success: 0,
time: 17,
urls: 48,
user: 8
},
 {
agent: "abc",
diff: 0,
file: 4924,
len: 1227,
port: 0,
row: 5,
start: 4,
success: 0,
time: 21,
urls: 48,
user: 9
},
 {
agent: "abc",
diff: 2393,
file: 6155,
len: 1227,
port: 0,
row: 6,
start: 1,
success: 0,
time: 3031,
urls: 48,
user: 3
},
 {
agent: "abc",
diff: 0,
file: 7386,
len: 1227,
port: 0,
row: 7,
start: 5,
success: 0,
time: 16,
urls: 48,
user: 12
},
 {
agent: "abc",
diff: 745,
file: 8617,
len: 1227,
port: 0,
row: 8,
start: 4,
success: 0,
time: 1383,
urls: 48,
user: 10
}
],
page: 3,
total: 20
}
debugger
            _that.data = result.list;
                    _that.des = result.des;
                    _that.number = result.total;
                    _that.pages = result.page;
                    if(!_that.isshowPaging){
                        _that.paging();        
                    }               
            /*getDetailUsers(param)
                .then(function(result) {
                    _that.data = result.data.list;
                    _that.des = result.data.des;
                    _that.number = result.data.total;
                    _that.pages = result.data.page;
                    _that.isshowPaging = true;
                    _that.paging();                        
                })
                .catch(function(err) {
                    console.log(err);
                })*/
        },
        paging: function() {
            var this_ = this
            this_.isshowPaging = true;
            $('#pagination').jqPaginator({
                totalPages: this_.pages,
                visiblePages: 5,
                currentPage: 1,
                wrapper: '<ul class="pagination" style="margin:0"></ul>',
                first: '<li class="first"><a href="javascript:void(0);">&laquo;</a></li>',
                prev: '<li class="prev"><a href="javascript:void(0);">&lsaquo;</a></li>',
                next: '<li class="next"><a href="javascript:void(0);">&rsaquo;</a></li>',
                last: '<li class="last"><a href="javascript:void(0);">&raquo;</a></li>',
                page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
                onPageChange: function(num) {                    
                    this_.page = num;
                    this_.refreshTable();
                }
            })
        },
    }
}
</script>
