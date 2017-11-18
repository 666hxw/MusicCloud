<template>
	<div :class="['subnav',{'no-sub':noSub}]">
		<div class="wrap" v-if="!noSub">
			<ul class="nav">
				<li v-for="data in Data">
					<router-link :to="{'path': topPath+data.path}">
						<em :class="{'active': isCurPath(data.path)}">{{data.title}}</em>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped lang="scss">
	$subnav-h: 35px;
    .no-sub{
    	height: 5px !important;
    }
	.subnav{
	    position: absolute;
	    z-index: 10;
	    width: 100%;
	    height: $subnav-h;
	    box-sizing: border-box;
	    background-color: #C20C0C;
	    border-bottom: 1px solid #a40011;
	    .wrap{
	  		width: 1110px;
	  		height: $subnav-h;
	  		margin: 0 auto;
	  		.nav{
	  			float: left;
    			padding-left: 184px;
    			li{
    				float: left;
    				a{	
    					float: left;
    					height: $subnav-h;
    					color: #fff;
    					text-decoration: none;
    					em{
    						display: block;
    						height: 20px;
    						line-height: 20px;
    						font-size: 12px;
    						margin: 7px 18px 0;
    						padding: 0 13px;
    						border-radius: 20px;
    						&.active{
    							background-color: #9B0909;
    						}
    					}
    				}
    			}
	  		}
	    }
	}
</style>
<script>
	export default{
		props: {
			Data: { //导航菜单数据
				type: Array,
				default: []
			},
		},
		data(){
			return {
				topPath: '/discover',
			}
		},
		methods: {
			//判断是否是当前路由
			isCurPath(path){
				const pPath = this.$route.path.split('/')[2],
					  curPath = '/'+pPath;
				if(curPath === path){
					return true;
				}else{
					//默认是
					if(!pPath){
						if(path==='/' || path==='/recommend'){
							return true;
						}
					}				
				}
			}
		},
		computed: {
			noSub: function(){
				const path = this.$route.path;
				if(path==='/' || /^\/discover/.test(path)){
					return false;
				}else{
					return true;
				}
			}
		},
		mounted(){

		}
	}
</script>