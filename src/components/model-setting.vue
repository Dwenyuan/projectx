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
                        <div class="input-group">
                            <span class="input-group-addon">模型类型</span>
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                    {{getModelTypes[getActiveTask.model.modelType]}}
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                    <li role="presentation" v-for="(item,key) in getModelTypes"><a role="menuitem" @click="changeModelType(key)" tabindex="-1" href="javascript:;">{{item}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row split-utilities">
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="number" min="0" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row split-utilities">
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">总用户数</span>
                                    <input type="text" class="form-control">
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
                                {{getRendezvous[getActiveTask.rendezvous.rendezvousEnable]}}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation" v-for="(item,key) in getRendezvous"><a role="menuitem" @click="changeRendezvous(key)" tabindex="-1" href="javascript:;">{{item}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body">
                        <p class="bg-danger">当所有虚拟用户到达集结点</p>
                        <p class="bg-danger">释放条件</p>
                        <p class="bg-danger">释放条件</p>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="startTime">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12"><span class="btn btn-info">立即运行</span></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12"><span class="btn btn-info">休眠后开始运行，休眠时间为</span></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12"><span class="btn btn-info">规定时间运行，时间为</span></div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="stopTime">Settings</div>
            <div role="tabpanel" class="tab-pane" id="loopTime">Settings</div>
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
        'getModelTypes',
        'getRendezvous',
        'getActiveTask'
    ]),
    methods: mapActions([
        'changeModelType',
        'changeRendezvous'
    ])
}
</script>
<style type="text/css">
.split-utilities {
    margin-top: 5px;
}
</style>
