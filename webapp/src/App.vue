<template>
  	<div id="app" >
		<!-- 导航 -->
		<mc-nav></mc-nav>
		<!-- 显示区域 -->
		<div class="content">
    		<router-view></router-view>
		</div>
  </div>
</template>

<script>
	import '../static/style/reset.scss'
	// 引入导航组件
	import Nav from '@/components/Nav'

	export default {
	  	name: 'app',
	  	data(){
			return {
			}
		},
		methods: {
			
		},
		mounted(){

		},
		components: {
			'mc-nav': Nav
		}
	}

</script>

<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  font-size: 12px;
	}
	.content{
		
	}
</style>
