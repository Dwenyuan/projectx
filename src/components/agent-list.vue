<template>
    <div ref="modal" class="modal fade" id="agentlist">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="list-group">
                                <a href="javascript:;" @click="selectArea=item.area" class="list-group-item row" v-for="item in arealist">
                                    <span class="badge">{{item.num}}</span>{{item.area}}
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-9">
                            <div class="col-md-4" v-for="item in getAgentsByArea(selectArea)">
                                <div class="panel" @click="selectAgent(item)">
                                    <div class="panel-body" :class="[getActiveTask.agents.exist(item)?'bg-success':'bg-gray']">
                                        <span class="glyphicon" :class="status(item)"></span>
                                        <span v-if="getActiveTask.agents.exist(item)" class="glyphicon glyphicon-ok pull-right"></span>
                                        <span>ip:{{item.ip}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>
<script type="text/javascript">
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {
        let _this = this
        $(this.$refs.modal).modal({
            show: false
        }).on('shown.bs.modal', function() {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
            var dialogHeight = $(_this.$refs.dialog).height();
            var m_top = (clientHeight - dialogHeight) / 2;
            $(_this.$refs.dialog).css({
                'margin': m_top + 'px auto',
                'transition': 'margin .3s'
            });
        })
    },
    data() {
        return {
            selectArea: '北京',
        }
    },
    computed: {
        ...mapGetters([
            'getActiveTask',
            'getAgents'
        ]),
        arealist() {
            let area = new Set()
            let result = []
            this.getAgents.forEach(value => area.add(value.area))
            area.forEach(value => {
                result.push({
                    area: value,
                    num: this.getAgents.filter(val => val.area === value).length
                })
            })
            return result
        }
    },
    methods: {
        ...mapActions(['selectAgent']),
        getAgentsByArea(area) {
            return this.getAgents.filter(value => value.area === area)
        },
        status(agent){ //agent 不同的状态有不同的样式
            switch(agent.status){
                case 'connected':
                    return ['glyphicon-flash']
                case 'connecting':
                    return ['glyphicon-flash','connecting']
                case 'disconnect':
                    return ['glyphicon-exclamation-sign']
            }
        }
    }
}
</script>
<style type="text/css">
.bg-gray {
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
}
</style>
