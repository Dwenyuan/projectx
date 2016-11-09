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
            <!-- <tbody> -->
            <transition-group tag="tbody" name="bounce">
                <tr v-for="item in getActiveTaskResult.lines" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.max}}</td>
                    <td>{{item.min}}</td>
                    <td>{{item.ave}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </transition-group>
            <!-- </tbody> -->
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
