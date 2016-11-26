
<template>
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
    data: function () {
            return {
                cur:1,
                showTail:true,
                showMorePre: false,
                showMoreTail: false,             
                               
            }
        },
     methods:{
        jumpFirst:function(data){
                var $this = this;                
                $this.cur = 1;
                $this.$set("showPre", false);
                $this.$am.ajax({
                    url:
                    type:'GET',
                    data:{start: 1},
                    success: function(data){
                        console.log(data);
                        $this.$set("records", data.record.records);
                        $this.$set("start", data.record.query.start);
                        $this.$set("total", data.record.query.total);
                        $this.$set("limit", data.record.query.limit);
                    }
                })
                $this.$set("showTail", true);
                return data;
            },
            minus:function(data){
                var $this = this;
                data--;
                $this.cur = data;
                $this.$set("showTail", true);
                if(data == 1){
                    $this.$set("showPre", false);

                }else{
                    $this.$set("showPre", true);
                }

                $this.$am.ajax({
                    url:window.$ApiConf.api_order_detail_list,
                    type:'GET',
                    data:{start: 1 + $this.limit * (data-1) },
                    success:function(data){
                        console.log(data);
                        $this.$set("records", data.record.records);
                        $this.$set("start", data.record.query.start);
                        $this.$set("total", data.record.query.total);
                        $this.$set("limit", data.record.query.limit);
                    }
                })
                return data;
            },
            plus: function(data){
                var $this = this;
                data++;
                $this.cur = data;
                $this.$set("showPre", true);
                if (data == $this.pageNo)
                {
                    $this.$set("showTail", false);
                }else
                {
                    $this.$set("showTail", true);
                }
                $this.$am.ajax({
                    url:/* 这里写上你自己请求数据的路径 */,
                    type:'GET',
                    data:{start: 1 + $this.limit * (data-1) },
                    success:function(data){
                        console.log(data);
                        $this.$set("records", data.record.records);
                        $this.$set("start", data.record.query.start);
                        $this.$set("total", data.record.query.total);
                        $this.$set("limit", data.record.query.limit);
                    }
                })
                return data;
            },
            classRenderer:function(index){
                var $this = this;
                var cur = $this.cur;
                if(index != cur){
                    return 'crt';
                }
                return '';
            },
            btnClick:function(data){
                var $this = this;
                if(data == 1){
                    $this.$set("showPre", false);

                }else{
                    $this.$set("showPre", true);
                }
                if (data == $this.pageNo)
                {
                    $this.$set("showTail", false);
                }else
                {
                    $this.$set("showTail", true);
                }
                if (data != $this.cur)
                {
                    $this.cur = data;
                    $this.$am.ajax({
                        url:window.$ApiConf.api_order_detail_list,
                        type:'GET',
                        data:{start: 1 + $this.limit * (data-1) },
                        success:function(data){
                            console.log(data);
                            $this.$set("records", data.record.records);
                            $this.$set("start", data.record.query.start);
                            $this.$set("total", data.record.query.total);
                            $this.$set("limit", data.record.query.limit);
                        }
                    })
                }
            },
            jumpTail:function(data){
                var $this = this;
                data = $this.pageNo;
                $this.cur = data;
                if (data == $this.pageNo)
                {
                    $this.$set("showTail", false);
                }else
                {
                    $this.$set("showTail", true);
                }
                $this.$am.ajax({
                    url:window.$ApiConf.api_order_detail_list,
                    type:'GET',
                    data:{start: 1 + $this.limit * (data-1) },
                    success:function(data){
                        console.log(data);
                        $this.$set("records", data.record.records);
                        $this.$set("start", data.record.query.start);
                        $this.$set("total", data.record.query.total);
                        $this.$set("limit", data.record.query.limit);
                    }
                })
                $this.$set("showPre", true);
                return data;
            },
         computed: {
            //*********************分页开始******************************//
            indexs: function(){
                var $this = this;
                var ar = [];

                if ($this.cur > 3)
                {
                    ar.push($this.cur - 3);
                    ar.push($this.cur - 2);
                    ar.push($this.cur - 1);

                }else
                {
                    for (var i = 1; i < $this.cur; i++)
                    {
                        ar.push(i);
                    }
                }
                if ($this.cur != $this.pageNo)
                {
                    ar.push($this.cur);
                }

                if ( $this.cur < ( $this.pageNo - 3 ) )
                {
                    ar.push($this.cur + 1);
                    ar.push($this.cur + 2);
                    ar.push($this.cur + 3);
                    if ( $this.cur < ( $this.pageNo - 4 ) )
                    {
                        $this.$set("showMoreTail", true);
                    }
                }else
                {
                    $this.$set("showMoreTail", false);
                    for (var i = ($this.cur + 1); i < $this.pageNo; i++)
                    {
                        ar.push(i);
                    }
                }
                return ar;
            }
            //*********************分页结束******************************//
        }
}
</script>
