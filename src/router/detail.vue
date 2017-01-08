<template>
    <div class="panel panel-body">
        <test-page></test-page> 
    </div>
   <!--  <div class="row">
       <div class="col-md-12">
           <div class="panel panel-default">
               <div class="panel-body">                    
                   
                   <hr>
                   
                   <div class="row">
                       <detail-tasks></detail-tasks>
                   </div>
                   <hr> 
                   <div class="row">
                       <detail-fail-tasks></detail-fail-tasks>
                   </div>
                   <hr>
                   
                   <div class="row">
                       <detail-over5></detail-over5>
                   </div>
                   <hr>
                   
                   <div class="row">
                       <detail-error></detail-error>
                   </div>
                   <div class="row">
                       <detail-fail-url></detail-fail-url>
                   </div>
                   <div class="row">
                       <detail-url></detail-url>
                   </div>  
               </div>
           </div>
       </div>
   </div> -->
</template>
<script>
import detailTasks from './detail-tasks.vue'
import detailFailTasks from './detail-failtasks.vue'
import detailOver5 from './detail-over5.vue'
import detailError from './detail-error.vue'
import detailFailUrl from './detail-failurl.vue'
import detailUrl from './detail-url.vue'
import testPage from './detail-users.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {

    },
    computed: mapGetters([
        'getDetailResult'
    ]),
    components: {
        detailTasks,
        detailFailTasks,
        detailOver5,
        detailError,
        detailFailUrl,
        detailUrl,
        testPage
    },
    data() {
        return {

        }
    },
    methods: {   
        ...mapActions([
            'changeTask'//调用
        ]),     
        changeNewTask() {            
            this.changeTask('f')//调用自己的方法
        }
    }
}
</script>
<style>
</style>
