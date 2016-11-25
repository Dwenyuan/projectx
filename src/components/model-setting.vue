<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#model" role="tab" data-toggle="tab">模型</a></li>
            <li role="presentation"><a href="#stopPoint" role="tab" data-toggle="tab">集合点</a></li>
            <li role="presentation"><a href="#startTime" role="tab" data-toggle="tab">开始</a></li>
            <li role="presentation"><a href="#stopTime" role="tab" data-toggle="tab">结束</a></li>
            <li role="presentation"><a href="#loopTime" role="tab" data-toggle="tab">运行次数</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="model">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="input-group">
                                    <span class="input-group-addon">模型类型</span>
                                    <div class="dropdown">
                                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                            {{getModelTypesEnum[getActiveTask.model.modelType]}}
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                            <li role="presentation" v-for="(item,key) in getModelTypesEnum"><a role="menuitem" @click="changeModelType(key)" tabindex="-1" href="javascript:;">{{item}}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-4">
                                <label href="javascript:;" class="radio pull-left" @click="changeIsCaps(1)"><span class="iradio_square-blue" :class="{checked:getActiveTask.model.isCaps===1}"></span><span>&nbsp;速率/秒</span></label>
                                <label href="javascript:;" class="checkbox pull-left" @click="changeIsCaps(0)"><span class="iradio_square-blue" :class="{checked:getActiveTask.model.isCaps===0}"></span><span>速率/用户数</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row split-utilities">
                            <div class="col-sm-6">
                                <div class="input-group has-error has-feedback">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="number" min="0" class="form-control" :value="getActiveTask.model.totalUsers" @input="changeTotalUsersByInput">
                                    <span class="glyphicon glyphicon-remove form-control-feedback"></span>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">初始速率</span>
                                    <input type="text" class="form-control" :value="getActiveTask.model.caps" @input="changeTotalUsersByInput">
                                </div>
                            </div>
                        </div>
                        <div class="row split-utilities">
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control" :value="getActiveTask.model.limit" @input="changeTotalUsersByInput">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control" :value="getActiveTask.model.keepTime" @input="changeTotalUsersByInput">
                                </div>
                            </div>
                        </div>
                        <div class="row split-utilities">
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control" :value="getActiveTask.model.step" @input="changeTotalUsersByInput">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control" :value="getActiveTask.model.chooseType" @input="changeTotalUsersByInput">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="stopPoint">
                <div class="panel-body">
                    <div class="input-group">
                        <div class="input-group-addon">集合点</div>
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                {{getRendezvousEnum[getActiveTask.rendezvous.rendezvousEnable]}}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation" v-for="(item,key) in getRendezvousEnum"><a role="menuitem" @click="changeRendezvousEnable(key)" tabindex="-1" href="javascript:;">{{item}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group" v-if="getActiveTask.rendezvous.rendezvousEnable===1">
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="chageSelectPolicy(0)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.rendezvous.selectPolicy===0}"></div>
                                        <span>当所有虚拟用户到达集结点</span>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="chageSelectPolicy(1)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.rendezvous.selectPolicy===1}"></div>
                                        <span>释放条件</span>
                                    </div>
                                    <input type="text" class="form-control" :value="getActiveTask.rendezvous.policy" @input="changePolicyByInput" :disabled="getActiveTask.rendezvous.selectPolicy!==1">
                                    <div class="input-group-addon"><span>个虚拟用户到达集合点</span></div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="chageSelectPolicy(2)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.rendezvous.selectPolicy===2}"></div>
                                        <span>释放条件</span>
                                    </div>
                                    <input type="text" class="form-control" :value="getActiveTask.rendezvous.policyUsers_Percent" @input="changePolicyUsers_PercentByInput" :disabled="getActiveTask.rendezvous.selectPolicy!==2">
                                    <div class="input-group-addon"><span>百分比(%)用户数到达集合点</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="startTime">
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeStartIndex(0)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.startConfig.startIndex===0}"></div>
                                    <span>立即运行</span></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeStartIndex(1)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.startConfig.startIndex===1}"></div>
                                    <span>休眠后开始运行，休眠时间为</span></div>
                                <input type="time" class="form-control" :disabled="getActiveTask.startConfig.startIndex!==1" :value="getActiveTask.startConfig.sleepTime" @input="changeSleepTimeByInput">
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeStartIndex(2)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.startConfig.startIndex===2}"></div>
                                    <span>规定时间运行，时间为</span></div>
                                <input type="datetime-local" class="form-control" :disabled="getActiveTask.startConfig.startIndex!==2" :value="getActiveTask.startConfig.startTime" @input="changeStartTimeByInput">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="stopTime">
                <div role="tabpanel" class="tab-pane" id="startTime">
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="changeStopIndex(0)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.stopConfig.stopIndex===0}"></div>
                                        <span>所有用户完全停止</span></div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="changeStopIndex(1)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.stopConfig.stopIndex===1}"></div>
                                        <span>停止运行，当出现</span></div>
                                    <input type="time" class="form-control" :disabled="getActiveTask.stopConfig.stopIndex!==1" :value="getActiveTask.stopConfig.stopUser" @input="changeStopUserByInput">
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="changeStopIndex(2)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.stopConfig.stopIndex===2}"></div>
                                        <span>停止运行，当出现</span></div>
                                    <input type="datetime-local" class="form-control" :disabled="getActiveTask.stopConfig.stopIndex!==2" :value="getActiveTask.stopConfig.stopPercent" @input="changeStopPercentByInput">
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="changeStopIndex(3)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.stopConfig.stopIndex===3}"></div>
                                        <span>停止运行，当时间为</span></div>
                                    <input type="time" class="form-control" :disabled="getActiveTask.stopConfig.stopIndex!==3" :value="getActiveTask.stopConfig.runTime" @input="changeRunTimeByInput">
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group">
                                    <div class="input-group-addon" @click="changeStopIndex(4)">
                                        <div class="iradio_square-blue" :class="{checked:getActiveTask.stopConfig.stopIndex===4}"></div>
                                        <span>规定时间停止，时间为</span></div>
                                    <input type="datetime-local" class="form-control" :disabled="getActiveTask.stopConfig.stopIndex!==4" :value="getActiveTask.stopConfig.stopTime" @input="changeStopTimeByInput">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="loopTime">
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeOnlineIndex(0)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.iteratorTimes.onlineIndex===0}"></div>
                                    <span>运行一次停止</span></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeOnlineIndex(1)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.iteratorTimes.onlineIndex===1}"></div>
                                    <span>一直运行，结束后重新开始</span></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="input-group">
                                <div class="input-group-addon" @click="changeOnlineIndex(2)">
                                    <div class="iradio_square-blue" :class="{checked:getActiveTask.iteratorTimes.onlineIndex===2}"></div>
                                    <span>停止运行，当次数达到</span></div>
                                <input type="datetime-local" class="form-control" :disabled="getActiveTask.iteratorTimes.onlineIndex!==2" :value="getActiveTask.startConfig.onlineIndex" @input="changeLoopTimesByInput">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    computed: mapGetters([
        'getModelTypesEnum',
        'getRendezvousEnum',
        'getActiveTask'
    ]),
    methods: {
        ...mapActions([
            'changeIsCaps',
            'changeModelType',
            'changeTotalUsers',
            'changeCaps',
            'changeLimit',
            'changeKeepTime',
            'changeStep',
            'changeChooseType',
            'changeRendezvousEnable',
            'chageSelectPolicy',
            'changePolicy',
            'changePolicyUsers_Percent',
            'changeStartIndex',
            'changeSleepTime',
            'changeStartTime',
            'changeStopIndex',
            'changeStopUser',
            'changeStopPercent',
            'changeRunTime',
            'changeStopTime',
            'changeOnlineIndex',
            'changeLoopTimes',
        ]),
        changeTotalUsersByInput(e) {
            this.changeTotalUsers(e.target.value)
        },
        changeCapsByInput(e) {
            this.changeCaps(e.target.value)
        },
        changeLimitByInput(e) {
            this.changeLimit(e.target.value)
        },
        changeKeepTimeByInput(e) {
            this.changeKeepTime(e.target.value)
        },
        changeStepByInput(e) {
            this.changeStep(e.target.value)
        },
        changePolicyByInput(e) {
            this.changePolicy(e.target.value)
        },
        changePolicyUsers_PercentByInput(e) {
            this.changePolicyUsers_Percent(e.target.value)
        },
        changeSleepTimeByInput(e) {
            this.changeSleepTime(e.target.value)
        },
        changeStartTimeByInput(e) {
            this.changeStartTime(e.target.value)
        },
        changeStopUserByInput(e) {
            this.changeStopUser(e.target.value)
        },
        changeStopPercentByInput(e) {
            this.changeStopPercent(e.target.value)
        },
        changeRunTimeByInput(e) {
            this.changeRunTime(e.target.value)
        },
        changeStopTimeByInput(e) {
            this.changeStopTime(e.target.value)
        },
        changeLoopTimesByInput(e) {
            this.changeLoopTimes(e.target.value)
        }
    }
}
</script>
<style type="text/css">
.split-utilities {
    margin-top: 5px;
}

.btn.checkbox {}

div.input-group-addon {
    text-align: left;
}
</style>
