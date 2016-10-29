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
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">脚本</div>
                    <div class="panel-body">
                        <div class="col-md-12 well">
                            <div class="col-md-8">
                                <div class="">{{getActiveTask.script?getActiveTask.script.name:''}}</div>
                            </div>
                            <div class="col-md-4">
                                <a href="javascript:void(0)" class="btn btn-primary btn-sm">增加</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">参数</div>
                    <div class="panel-body">
                        <div class="panel-body well">{{getActiveTask.arg?getActiveTask.arg.name:''}}</div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">运行参数</div>
                    <div class="panel-body">
                        <model-setting></model-setting>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">agent</div>
                    <div class="panel-body">
                        <div class="col-md-3" v-for="item in getActiveTask.agents">
                            <div class="panel">
                                <div class="panel-body well">
                                    <div class="col-md-2"><span class="glyphicon glyphicon-flash"></span></div>
                                    <div class="col-md-10">地区:{{item.area}}</div>
                                    <div class="col-md-12">ip:{{item.ip}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="panel">
                                <div class="panel-body well plus-bg">
                                    <br>
                                    <span class="glyphicon glyphicon-plus"></span>
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
import modelSetting from '../components/modelSetting.vue'
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
        'getActiveTask',
        'getAgents'
    ]),
    methods: mapActions([
        'activeTask'
    ]),
    data() {
        return {

        }
    },
    components: {
        modelSetting
    }
}
</script>
<style>
.plus-bg {
    /*background:url('../asset/plus.png') no-repeat 50% 50% /contain;*/
    text-align: center;
    height: 100%;
}
</style>
