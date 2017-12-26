<template>
    <div class="nav" :style="{'height': height+'px'}">
        <!-- topbar组件 -->
        <top-nav
            :indexUrl="indexUrl"
            :Data="navData"
            ></top-nav>
        <sub-nav
            :Data="subNavData"
            ></sub-nav>
    </div>
</template>
<script>
	// 引入topbar组件
	import TopNav from '@/components/TopNav'
	// 引入subNav组件
    import SubNav from '@/components/SubNav'
    
    export default {
        name: 'nav',
        data(){
            return {                
				indexUrl: '/', //首页地址
				navData: [], //一级导航菜单
                subNavData: [], //二级导航菜单
            }
        },
        methods: {
            //获取一级导航菜单数据
			getNavData(){
				this.$http.get('./static/data/top-nav.json').then((res)=>{
					this.navData = res.data;
				})
            },
            //获取二级导航菜单数据
			getSubNavData(){
				this.$http.get('./static/data/sub-nav.json').then((res)=>{
					this.subNavData = res.data;
				})
			},
		},
		mounted(){
			this.getNavData();
			this.getSubNavData();
        },
        computed: {
            //根据路由的值，动态设置导航栏高度
            height: function (){
                return this.$route.path.indexOf('/discover') != -1 ? 105 : 75;
            }
        },
		components: {
			'top-nav': TopNav,
			'sub-nav': SubNav,
		}
    }
</script>
<style lang="scss" scoped>

</style>
