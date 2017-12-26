import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
// import MintUI from 'mint-ui'

Vue.use(Router);
Vue.use(VueAxios, axios);
// Vue.use(MintUI)

export default new Router({
  routes: [
    //主页
    {
      path: "/",
      redirect: {
        path: "index"
      }
    },
    //index页
    {
      path: "/index",
      name: "index",
      redirect: {
        name: "recommend"
      }
    },
    //发现音乐
    {
      path: "/discover",
      name: "discover",
      redirect: {
        name: "recommend"
      }
    },
    //推荐
    {
      path: "/discover/recommend",
      name: "recommend",
      component: resolve => require(["../pages/Discover/Recommend"], resolve)
    },
    //排行榜
    {
      path: "/discover/toplist",
      name: "toplist",
      component: resolve => require(["../pages/Discover/TopList"], resolve)
    },
    //歌单
    {
      path: "/discover/playlist",
      name: "playlist",
      component: resolve => require(["../pages/Discover/PlayList"], resolve)
    },
    //主播电台
    {
      path: "/discover/djradio",
      name: "djradio",
      component: resolve => require(["../pages/Discover/Djradio"], resolve)
    },
    //歌手
    {
      path: "/discover/artist",
      name: "artist",
      component: resolve => require(["../pages/Discover/Artist"], resolve)
    },
    //新碟上架
    {
      path: "/discover/album",
      name: "album",
      component: resolve => require(["../pages/Discover/Album"], resolve)
    },
    //我的音乐
    {
      path: "/my",
      component: resolve => require(["../pages/My/Index"], resolve)
    },
    //朋友
    {
      path: "/friend",
      component: resolve => require(["../pages/Friend/Index"], resolve)
    },
    //商城
    {
      path: "/shop",
      component: resolve => require(["../pages/Shop/Index"], resolve)
    },
    //音乐人
    {
      path: "/muscist",
      component: resolve => require(["../pages/Muscist/Index"], resolve)
    },
    //下载客户端
    {
      path: "/download",
      component: resolve => require(["../pages/Download/Index"], resolve)
    },
    //新碟上架
    {
      path: "/topList",
      name: "topList",
      component: resolve => require(["../pages/TopList/Index"], resolve)
    }
  ]
});
