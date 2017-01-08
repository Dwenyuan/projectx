<template>
    <div>
        <div class="col-md-2">
            <div class="row" v-for="item in getTasks">
                <div class="col-xs-12" @click="activeTask(item)">
                    <div class="panel-body">
                        <a href="javascript:void(0)" class="btn btn-warning btn-block info" :class="{active:getActiveTask===item}">{{item.name}}</a>
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
                            <div v-if="selectScriptShow" class="" @click="selectScriptShow=false">{{getActiveTask.script?getActiveTask.script.name:''}}</div>
                            <label v-else class="col-xs-3 panel-body" @click.stop="selectTaskScript(item)" v-for="(item,key) in getScripts">
                                <div class="iradio_square-blue" :class="{checked:isActiveScript(item)}"></div>{{item.name}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">参数</div>
                    <div class="panel-body">
                        <div class="col-md-12 well">
                            <div v-if="selectParamShow" class="" @click="selectParamShow=false">{{getActiveTask.param?getActiveTask.param.name:''}}</div>
                            <label v-else class="col-xs-3 panel-body" @click.stop="selectTaskParam(item)" v-for="(item,key) in getParamFile">
                                <div class="iradio_square-blue" :class="{checked:isActiveParam(item)}"></div>{{item.name}}</label>
                        </div>
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
                                    <div class="col-md-2"><span class="glyphicon glyphicon-flash" :class="status(item)"></span></div>
                                    <div class="col-md-10">地区:{{item.area}}</div>
                                    <div class="col-md-12">ip:{{item.ip}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="panel">
                                <div class="panel-body well plus-bg" data-toggle="modal" data-target="#agentlist">
                                    <br>
                                    <span class="glyphicon glyphicon-plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <agent-list></agent-list>
    </div>
</template>
<script>
import agentList from '../components/agent-list.vue'
import modelSetting from '../components/model-setting.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {},
    computed: {
        ...mapGetters([
            'getScripts',
            'getParamFile',
            'getTasks',
            'getActiveTask',
            'getAgents'
        ])
    },
    methods: {
        ...mapActions([
            'activeTask',
            'changeTaskScript',
            'changeTaskParam'
        ]),
        isActiveScript(script) {
            return this.getActiveTask.script === script
        },
        isActiveParam(param) {
            return this.getActiveTask.param === param
        },
        selectTaskScript(param) {
            this.changeTaskScript(param)
            this.selectScriptShow = true

        },
        selectTaskParam(script) {
            this.changeTaskParam(script)
            this.selectParamShow = true
        },
        status(agent) { //agent 不同的状态有不同的样式
            switch (agent.status) {
                case 'connected':
                    return ['glyphicon-flash']
                case 'connecting':
                    return ['glyphicon-flash', 'connecting']
                case 'disconnect':
                    return ['glyphicon-exclamation-sign']
            }
        }
    },
    data() {
        return {
            selectScriptShow: true,
            selectParamShow: true
        }
    },
    components: {
        modelSetting,
        agentList
    }
}
</script>
<style>
.plus-bg {
    /*background:url('../asset/plus.png') no-repeat 50% 50% /contain;*/
    text-align: center;
    height: 100%;
}

span.glyphicon.connecting {
    animation: connecting .5s ease infinite;
    -webkit-animation: connecting .5s ease infinite;
    /* Safari 与 Chrome */
}

@keyframes connecting {
    0% {
        color: gray;
    }
    100% {
        color: red;
    }
}

@-webkit-keyframes connecting {
    0% {
        color: gray;
    }
    100% {
        color: red;
    }
}
</style>
