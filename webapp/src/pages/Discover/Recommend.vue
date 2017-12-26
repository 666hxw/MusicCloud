<template>
	<div>
		<mc-banner :data="bannerData" :duration=2000></mc-banner>
	</div>
</template>
<script>
	// 引入banner组件
	import Banner from '@/components/banner'

	export default {
		data(){
			return {
				bannerData: [],
			}
		},
		methods: {
			getBannerData(){
				this.$http.get('./static/mock/banner.json').then((res)=>{
					this.bannerData = res.data;
				}, ()=>{

				});
			}
		},
		mounted(){
			this.getBannerData();
		},
		components: {			
			'mc-banner': Banner,
		}
	}
</script>
<style scoped lang="scss">
	
</style>