<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <summary-task></summary-task>
                    </div>
                    <hr>
                    <!-- <div class="row">
                        <div class="col-md-2" v-for="item in getActiveTaskResult.lines">
                            <div class="panel-body well">
                                <div class="col-md-12">成功数</div>
                                <div class="col-md-12">0</div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="panel-body well">
                                <div class="col-md-12">失败数</div>
                                <div class="col-md-12">0</div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="panel-body well">
                                <div class="col-md-12">运行中</div>
                                <div class="col-md-12">0.0%</div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="panel-body well">
                                <div class="col-md-12">启动数</div>
                                <div class="col-md-12">1ms</div>
                            </div>
                        </div>
                    </div> -->
                    
                    <div class="col-lg-12">
                        <div class="panel-body">
                            <div class="col-lg-3">
                                <chart></chart>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <summary-lines></summary-lines>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import chart from './charts.vue'
import summaryTask from './summary-task.vue'
import summaryLines from './summary-lines.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {

    },
    computed: mapGetters([
        'getTasks',
        'getTaskResult',
        'getActiveTaskResult',
        'getActiveTask',
        'getAgents'
    ]),
    components: {
        chart,
        summaryTask,
        summaryLines
    },
    data() {
        return {

        }
    }
}
</script>
<style>
</style>
