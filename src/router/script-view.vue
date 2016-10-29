<template>
    <div class="panel-body">
        <div class="row">
            <div class="col-md-10">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span>脚本</span>
                        <a href="javascript:void(0)" @click="islist=true" :class="{active:islist}" class="btn btn-xs pull-right">
                            <span class="glyphicon glyphicon-th-list"></span>
                        </a>
                        <a href="javascript:void(0)" @click="islist=false" :class="{active:!islist}" class="btn btn-xs pull-right">
                            <span class="glyphicon glyphicon-th"></span>
                        </a>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <div v-if="!islist" class="col-md-2" @click="activeScript(item)" v-for="item in getScripts">
                                <div class="panel">
                                    <div class="panel-body well">
                                        <div class="col-md-12">{{item.name}}</div>
                                    </div>
                                </div>
                            </div>
                            <table v-if="islist" class="table table-striped table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>名称</th>
                                        <th>备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in getScripts" @click="activeScript(item)">
                                        <td>{{item.id}}</td>
                                        <td>{{item.name}}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pull-right"><a href="#scriptManager" data-toggle="modal" class="btn btn-primary">增加</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="list-group">
                    <a href="#" class="list-group-item disabled">{{getActiveScript.id}}</a>
                    <a href="#" class="list-group-item">{{getActiveScript.name}}</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">参数文件</div>
                    <div class="panel panel-body">
                        <div class="col-md-12">
                            <div class="col-md-2" @click="activeArg(item)" v-for="item in getArgFile">
                                <div class="panel">
                                    <div class="panel-body well">
                                        <div class="col-md-12">{{item.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pull-right"><a href="#scriptManager" data-toggle="modal" class="btn btn-primary">增加</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {

    },
    computed: mapGetters([
        'getScripts',
        'getActiveScript',
        'getArgFile'
    ]),
    methods: mapActions(['activeScript']),
    data() {
        return {
            islist: false
        }
    }
}
</script>
<style>
.page-split {
    height: 50%;
}

div.panel {
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
