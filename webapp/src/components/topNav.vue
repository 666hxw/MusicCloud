<template>
	<div class="top-bar">
		<div class="wrap">
			<h1 class="logo">
				<a :href="indexUrl">网易云音乐</a>
			</h1>
			<ul class="nav">
				<li v-for="data in Data">
					<router-link 
						:to="{path: data.path}" 
						:class="{'active':isCurPath(data.path)}"
						>
						<em>{{data.title}}</em>
						<sub v-show="isCurPath(data.path)" class="cor">&nbsp;</sub>
						<sup v-show="data.path === '/download'" class="cor"></sup>
					</router-link>
				</li>
			</ul>
			<!-- 用户头像 -->
			<div class="avatar">
				<img :src="avatar" />
				<div class="cor" >
					<span></span>
				</div>
				<template>							
					<!-- 用户下拉列表 -->
					<div class="me-list">
						<i class="arrow"></i>
						<ul v-for="Data in userListData.login">
							<li v-for="data in Data">
								<router-link :to="{'path': data.path}">
									<i :class="['icon', 'icon-'+data.icon]"></i>
									<em>{{data.title}}</em>
								</router-link>
							</li>
						</ul>
						<ul>
							<li>
								<a>
									<i class="icon icon-loginOut"></i>
									<em>退出</em>
								</a>
							</li>
						</ul>
					</div>
				</template>
			</div>
			<!-- 视频投稿 -->
			<router-link class="upload-video" :to="{'path': '/'}">视频投稿</router-link>
			<!-- 搜索框 -->
			<div class="search">
				<div class="search-field">
					<input name="search" v-model="search" @click="showSearch()" placeholder="音乐/电台/用户">
					<i v-show="search" class="clear-search" @click="search = ''"></i>
				</div>
				<!-- 搜索结果 -->
				<div class="search-result" v-show="searchResData.length">
					<p>搜索"{{search}}"相关用户</p>
					<!-- 结果列表 -->
					<ul class="search-list">

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	$top-bar-h: 70px;
	$top-bar-bg-color: #242424;
	$top-bar-w: 100%;
	$top-bar-content-w: 1100px; 
	$cor-bg: #c20c0c; //导航栏下角标背景色
	$avatar-img-w: 30px;
	$avatar-cor-bg: #454545;
	$me-list-bg-color: #2b2b2b;

	.top-bar{
		width: $top-bar-w;
		height: $top-bar-h;
		background-color: $top-bar-bg-color;
		.logo,.search-field,sup.cor,.clear-search,.upload-video{
			background: url(/static/img/topbar.png) no-repeat;
		}
		.icon,.arrow{
			background: url(/static/img/toplist.png) no-repeat;
		}
		.wrap{
			width: $top-bar-content-w;
			height: $top-bar-h;
			margin: 0 auto;
			.logo{
				float: left;
			    width: 176px;
			    height: 69px;
			    background-position: 0 20px;
			    background-position: 0 0;
			    a{
		    	    float: left;
				    width: 157px;
				    height: 100%;
				    padding-right: 20px;
				    text-indent: -9999px;
			    }
			}
		}
		//一级导航栏
		.nav{
			float: left;
			li{
				float: left;
				position: relative;
				a{
					float: left;
					height: $top-bar-h;
					color: #fff;
					text-decoration: none;
					font-size: 14px;
					line-height: $top-bar-h;
					em{
						float: left;
						height: $top-bar-h;
						line-height: $top-bar-h;
						padding: 0 18px;
					}
					sub.cor{
						display: block;
						position: absolute;
						top: $top-bar-h - 5px;
						left: 50%;
						width: 0;
						height: 0;
						margin-left: -5px;
						border-left: 10px $cor-bg solid;
						border-top: 10px $cor-bg solid;
						border-radius: 0 0 10px 0;
						transform: rotate(45deg);
					}
					sup.cor{
						display: block;
						position: absolute;
						top: $top-bar-h / 2 - 16;
						right: -22px;
						width: 28px;
						height: 16px;						
						background-position: -190px 0;
					}
				}
				a.active{
					background: #000;
				}
			}
		}
		//用户头像
		.avatar{
			float: right;
			position: relative;
			width: 70px;
			margin: 19px 0 0 5px;
			img{
				width: $avatar-img-w;
				height: $avatar-img-w;
				border-radius: 50%;
				border: none;
			}
			.cor{
				float: right;   
				width: 15px;
			    margin-top: 12px;
			    height: 9px;
			    overflow: hidden;
				span{
					display: block;
					width: 0;
					height: 0;
					margin: -5px 0 0 2px; 
					border-left: 10px $avatar-cor-bg solid;
					border-top: 10px $avatar-cor-bg solid;
					transform: rotate(45deg);
				}
			}
			.me-list{	
				display: none;		
				position: absolute;
				top: 40px;
				left: -51px;
				z-index: 20;
				width: 158px;
				background-color: $me-list-bg-color;	    
				box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
    			border-radius: 4px;	
    			.icon{
				    float: left;
				    width: 18px;
				    height: 18px;    
				    margin: 7px 10px 0 0;
    				&-home{
					    background-position: 0 -80px;
    				}
    				&-msg{
    					background-position: -20px -120px;
    				}
    				&-level{
    					background-position: 0 -100px;
    				}
    				&-member{
    					background-position: 0 -221px;
    				}
    				&-setting{
    					background-position: 0 -140px;
    				}
    				&-import{
    					background-position: 0 -180px;
    				}
    				&-loginOut{
    					background-position: 0 -200px;
    				}
    			}
    			.arrow{    
    				position: absolute;
				    top: -8px;
				    left: 50%;
				    width: 14px;
				    height: 8px;
				    margin-left: -7px;
				    background-position: -20px 0;
    			}	
				ul{		
					float: left;
					width: 100%;
					border-bottom: 1px #202020 solid;				
				 	li{
				 		float: left;    
				 		box-sizing: border-box;
    					width: 100%;
    					&:hover{
						    background: #353535;
						    color: #fff;
    					}
				 		a{
				 			display: block;
			 			    float: left;
						    box-sizing: border-box;
						    width: 100%;
				 			height: 35px;
				 			line-height: 22px;
						    padding-left: 24px;
						    color: #ccc;
						    text-align: left;
				 			em{	
				 				// float: left;
				 				// width: 100%;
				 				line-height: 35px;
				 				font-size: 12px;
				 			}
				 		}
				 	}
				}	
			}
			&:hover{
				.me-list{
					display: block;		
				}
			}
		}
		//视频投稿
		.upload-video{
			float: right;
			margin: 19px 0 0 12px;
			width: 80px;
			height: 32px;
			line-height: 32px;
			text-align: right;
			padding-right: 10px;
			color: #bbb;
			font-size: 12px;
			text-decoration: none;
			background-position: 0 -140px;
			&:hover{
				background-position: -100px -140px;
			}
		}
		//搜索框
		.search{
			float: right;			
			margin-top: 19px;
			//输入框
			&-field{
				position: relative;
				width: 160px;
				height: 30px;
				line-height: 30px;
				background-position: 2px -100px;
				background-color: #fff;
				border-radius: 30px;
				input{
					border: none;
					outline: none;
					width: 60%;
				}
			}
			//输入框清除按钮
			.clear-search{
				display: block;
				position: absolute;
				top: 8px;
				right: 10px;
				width: 14px;
				height: 14px;
				background-position: -180px -96px;
				cursor: pointer;
			}
			//结果
			&-result{

			}
		}
	}
</style>
<script>
	export default{
		props: {
			indexUrl: { //主页路径
				type: String,
				default: '/'
			},
			Data: { //导航菜单数据
				type: Array,
				default: []
			},

		},
		data(){
			return{
				curPath: '', //当前路径
				search: '', //搜索内容
				searchResData: [], //搜索结果数据
				avatar: '/static/img/avatar/avatar.jpg', //用户头像路径
				showUserInfo: false, //是否显示用户下拉菜单
				userListData: {
					login: [], //登录
					noLogin: [], //未登录
				}, //用户下拉列表
			}
		},
		methods: {	
			//判断是否是当前路由
			isCurPath(path){
				var curPath = '/'+this.$route.path.split('/')[1];
				if(curPath === path){
					return true;
				}else{
					//默认是
					if(path === '/discover'){
						if(curPath === '' || curPath === '/' || curPath === '/index'){
							return true;
						}
					}			
				}
			},
			//显示搜索结果
			showSearch(){
				const search = this.search;
				//TODO 发送请求，显示数据

			},
			//获取用户下拉列表菜单数据
			getUserList(){
				//获取登录后菜单
				this.$http.get('/static/data/user-list-login.json').then((res)=>{
					this.userListData.login = res.data;
				});				
				//获取未登录菜单
				this.$http.get('/static/data/user-list-nologin.json').then((res)=>{
					this.userListData.noLogin = res.data;
				});
			},
		},
		mounted(){
			this.curPath = this.$route.path;
			//获取用户下拉列表
			this.getUserList();

		}
	}
</script>