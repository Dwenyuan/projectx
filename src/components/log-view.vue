<template>
    <!-- 用于查看log文件 -->
    <div class="panel panel-default">
        <div class="panel-heading">
            <p>日志查看</p>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-xs-3">
                    <div class="list-group">
                        <a :title="item.tips" class="list-group-item" v-for="(item,key) in getLogs" :class="levelClass(item.level)" :href="`#p${key}`">{{`${item.url}:level${item.level}`}}</a>
                    </div>
                </div>
                <div class="col-xs-9">
                    <table class="table table-condensed table-striped table-hover" v-for="(logs,key) in getLogs">
                        <tbody>
                            <tr :id="`p${key}`" v-for="item in logs.logs">
                                <td :style="{background:item.color}">{{key+':'+item.log}}</td>
                            </tr>
                        </tbody>
                    </table>
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
const levelRule = ['col-xs-offset-0', 'col-xs-offset-2', 'col-xs-offset-4']
export default {
    props: [],
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'getLogs'
        ])
    },
    methods: {
        levelClass(index) {
            switch (index) {
                case 0:
                    return {
                        'col-xs-offset-0': true
                    }
                case 1:
                    return {
                        'col-xs-offset-2': true
                    }
                case 2:
                    return {
                        'col-xs-offset-4': true
                    }
                case 3:
                    return {
                        'col-xs-offset-6': true
                    }
            }
            return {

            }
        }
    }
}
</script>
<style>
a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
</style>
