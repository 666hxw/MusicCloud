import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(MintUI)

//主页路由配置
const indexRoute = {
	component: resolve => require([`../pages/Discover/Index`], resolve),
	children: [
		{
				path: '',
				redirect: {
	  			name: 'index'
	  		},
		},
		{
	  		path: 'index',
	  		name: 'index',
				redirect: {
	  			name: 'recommend'
	  		},
		},
		//推荐
		{
			path: 'recommend',
			name: 'recommend',
			component: resolve => require(['../pages/Discover/Recommend'], resolve),
		},
		//排行榜
		{
			path: 'toplist',
			name: 'toplist',
			component: resolve => require(['../pages/Discover/TopList'], resolve),
		},
		//歌单
		{
			path: 'playlist',
			name: 'playlist',
			component: resolve => require(['../pages/Discover/TopList'], resolve),
		},
		//主播电台
		{
			path: 'djradio',
			name: 'djradio',
			component: resolve => require(['../pages/Discover/TopList'], resolve),
		},
		//歌手
		{
			path: 'artist',
			name: 'artist',
			component: resolve => require(['../pages/Discover/TopList'], resolve),
		},
		//新碟上架
		{
			path: 'album',
			name: 'album',
			component: resolve => require(['../pages/Discover/TopList'], resolve),
		},
	],
}

//多级路由嵌套时，父级路由不使用name值
export default new Router({
  routes: [
  	//主页
  	{
  		path: '/',
  		indexRoute
  	},
  	//index页
  	{
  		path: '/index',indexRoute
  	},
  	//发现音乐
    {
  		path: '/discover',
  		indexRoute
    },
    //我的音乐
    {
  		path: '/my',
  		component: resolve => require(['../pages/My/Index'], resolve),
    },
    //朋友
    {
  		path: '/friend',
  		component: resolve => require(['../pages/Friend/Index'], resolve),
    },
    //商城
    {
  		path: '/shop',
  		component: resolve => require(['../pages/Shop/Index'], resolve),
    },
    //音乐人
    {
  		path: '/muscist',
  		component: resolve => require(['../pages/Muscist/Index'], resolve),
    }, 
    //下载客户端
    {
  		path: '/download',
  		component: resolve => require(['../pages/Download/Index'], resolve),
    },
	//新碟上架
	{
		path: '/topList',
		name: 'topList',
		component: resolve => require(['../pages/TopList/Index'], resolve),
	},
  ]
})
