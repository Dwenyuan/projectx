<template>
    <div class="row">
        <div class="col-md-2">
            <div class="row" v-for="item in getTasks">
                <div class="col-xs-12" @click="activeTask(item)">
                    <div class="panel-body">
                        <a href="javascript:void(0)" class="btn btn-primary btn-block">{{item.name}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-1 btn btn-primary">响应监控</div>
                            <div class="col-md-1 btn btn-primary">概要</div>
                            <div class="col-md-1 btn btn-primary">报表</div>
                            <div class="col-md-1 btn btn-primary">错误统计</div>
                            <div class="col-md-1 btn btn-primary">概要</div>
                            <div class="col-md-7 btn btn-primary">&nbsp;</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="panel-body well">
                                    <div class="col-md-12">虚拟用户</div>
                                    <div class="col-md-12">0</div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="panel-body well">
                                    <div class="col-md-12">点击数</div>
                                    <div class="col-md-12">0</div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="panel-body well">
                                    <div class="col-md-12">错误率</div>
                                    <div class="col-md-12">0.0%</div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="panel-body well">
                                    <div class="col-md-12">处理时间</div>
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
                                <!-- <div class="col-lg-3">
                                    <chart></chart>
                                </div>
                                <div class="col-lg-3">
                                    <chart></chart>
                                </div>
                                <div class="col-lg-3">
                                    <chart></chart>
                                </div> -->
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
    ready() {

    },
    computed: mapGetters([
        'getTasks',
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
