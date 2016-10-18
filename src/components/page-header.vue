<template>
	<!--页头-->
	<div class="row">
		<div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					<a rel="nofollow" class="navbar-brand" href="#"><img class="logo" alt="a" :src="logoimg"></a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="">
							<!--<a rel="nofollow" href="#" v-link="'script'">脚本</a>-->
							<router-link to="/script">脚本</router-link>
						</li>
						<li>
							<!--<a rel="nofollow" href="#" v-link="'scene'">场景</a>-->
							<router-link to="/scene">场景</router-link>
						</li>
						<li>
							<!--<a rel="nofollow" href="#" v-link="'test'">测试</a>-->
							<router-link to="/test">测试</router-link>
						</li>
						<li>
							<!--<a rel="nofollow" href="#" v-link="'report'">报告</a>-->
							<router-link to="/report">报告</router-link>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a rel="nofollow" href="#">充值</a>
						</li>
						<li>
							<a rel="nofollow" href="#">username</a>
						</li>
						<li>
							<a rel="nofollow" href="#">退出</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
    export default {
        replace: false,
        ready() {
            console.log(this.logoimg)
        },
        data() {
            return {
                logoimg: require('../asset/logo.png'),
                text: 'vue'
            }
        }
    }
</script>
<style>
    .logo {
        height: 100%;
        height: calc(100% + 30px);
        margin: -15px;
    }
</style>