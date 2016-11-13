<template>
    <div class="panel-body">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>总数</th>
                    <th>最大值</th>
                    <th>最小值</th>
                    <th>平均值</th>
                    <th>最后值</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in getActiveTaskResult.lines" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.max}}</td>
                    <td>{{item.min}}</td>
                    <td>{{item.ave}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    prop: [],
    computed: mapGetters([
        'getActiveTaskLines',
        'getActiveTaskResult'
    ])
}
</script>
<style type="text/css">
</style>
