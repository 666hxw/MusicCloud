<template>
  	<div id="app">
		<!-- topbar组件 -->
		<top-nav
			:indexUrl="indexUrl"
			:Data="navData"
			></top-nav>
		<sub-nav
			:Data="subNavData"
			></sub-nav>
    	<router-view></router-view>
  </div>
</template>

<script>
	import '../static/style/reset.scss'
	// 引入topbar组件
	import topNav from '@/components/topNav'
	import subNav from '@/components/subNav'

	export default {
	  	name: 'app',
	  	data(){
			return {
				indexUrl: '/', //
				navData: [], //一级导航菜单
				subNavData: [], //二级导航菜单
			}
		},
		methods: {
			getNavData(){
				this.$http.get('/static/data/top-nav.json').then((res)=>{
					this.navData = res.data;
				})
			},
			getSubNavData(){
				this.$http.get('/static/data/sub-nav.json').then((res)=>{
					this.subNavData = res.data;
				})
			},
		},
		mounted(){
			const route = this.$route;
			this.getNavData();
			this.getSubNavData();
		},
		components: {
			'top-nav': topNav,
			'sub-nav': subNav,
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
	}
</style>
