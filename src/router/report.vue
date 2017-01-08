<template>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="row">
                    <summary-task></summary-task>
                </div>
                <hr>
                <div class="col-lg-12">
                    <div class="panel-body">
                        <div class="col-lg-6" v-for="line in getCharts">
                            <chart :line="line"></chart>
                        </div>
                        <div class="col-lg-3">
                            <a href="javascript:;" @click="addchart" class="btn btn-default btn-block"><span class="glyphicon glyphicon-plus"></span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <summary-lines></summary-lines>
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
    getData
} from '../asset/request-list.js'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    props: [],
    mounted() {
        this.getDataPerSecond({
            userCode: 'lin'
        })
    },
    computed: mapGetters([
        'getTasks',
        'getTaskResult',
        'getActiveTaskResult',
        'getActiveTask',
        'getCharts',
        'getAgents'
    ]),
    methods: {
        ...mapActions([
            'addchart'
        ]),
        getDataPerSecond(param) {
            getData(param).then(res => {
                console.log(res.data)
                setTimeout(() => {
                    this.getDataPerSecond(param)
                }, 1000)
            }).catch(err => {
                console.error(err)
                setTimeout(() => {
                    this.getDataPerSecond(param)
                }, 1000)
            })

        }
    },
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
