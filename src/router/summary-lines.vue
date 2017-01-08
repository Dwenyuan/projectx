<template>
    <div class="panel-body" style="max-height: 400px;overflow: auto;">
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
                <tr v-for="(item,key) in getActiveTaskResult.lines" :key="item.name" @click="select=key" :class="{info:key===select}">
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
    data() {
        return {
            select: 0
        }
    },
    computed: mapGetters([
        'getActiveTaskLines',
        'getActiveTaskResult'
    ])
}
</script>
<style type="text/css">
.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-out .5s;
}

@keyframes bounce-in {
    0% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
</style>
