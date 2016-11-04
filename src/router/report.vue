<template>
    <div class="row">
        <div class="col-md-2">
            <div class="row" v-for="item in getTaskResult.tasks">
                <div class="col-xs-12" @click="activeTask(item)">
                    <div class="panel-body">
                        <a href="javascript:void(0)" class="btn btn-primary btn-block">{{item.name}}
                        <div class="row">
                            <div class="col-xs-2">成功数</div>
                            <div class="col-xs-2">失败数</div>
                            <div class="col-xs-2">运行中</div>
                            <div class="col-xs-2">启动数</div>
                            <div class="col-xs-2">请求数</div>
                            <div class="col-xs-2">响应数</div>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-1 btn btn-primary">成功数</div>
                            <div class="col-md-1 btn btn-primary">失败数</div>
                            <div class="col-md-1 btn btn-primary">运行中</div>
                            <div class="col-md-1 btn btn-primary">启动数</div>
                            <div class="col-md-1 btn btn-primary">请求数</div>
                            <div class="col-md-7 btn btn-primary">响应数</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-2">
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
                        </div>
                        <hr>
                        <div class="col-lg-12">
                            <div class="panel-heading">报告</div>
                            <div class="panel-body">
                                <div class="col-lg-3">
                                    <chart></chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import chart from './charts.vue'
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
        'getActiveTask',
        'getAgents'
    ]),
    components: {
        chart
    },
    data() {
        return {

        }
    }
}
</script>
<style>
</style>
