<template>
    <div class="banner" :style="{'background-image':'url('+data[index].bg_src+')', 'background-repeat':'repeat-x'}">
        <div class="wrap">
            <div class="ban">
                <router-link class="" :to="{'path': data[index].url}">
                    <transition>
                        <img :src="data[index].img_src" :title="data[index].title" :style="style"/>
                    </transition>
                </router-link>
                <a class="btnl" href="javascript:void(0);" @click="prev"></a>
                <a class="btnr" href="javascript:void(0);" @click="next"></a>
                <div class="dots">
                    <a v-for="d,d in data" href="#" :class="['pg', 'f-alpha', {'active': d==index ? true : false}]"></a>
                </div>
            </div>
            <div class="download">
                <router-link :to="{path: '/Download'}">下载客户端</router-link>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .banner{
        .wrap{
            position: relative;
            width: 982px;
            height: 336px;
            margin: 0 auto;
            .ban{
                text-align: left;
            }
            .btnl,.btnr{
                display: block;
                position: absolute;
                top: 50%;
                margin-top: -31px;
                width: 37px;
                height: 63px;
                text-indent: -9999px;
                background-image: url(../../static/img/banner/banner.png);                
            }
            .btnl{
                left: -68px;
                background-position: 0 -360px;
                &:hover{
                    background-position: 0 -430px;
                }
            }
            .btnr{
                right: -68px;
                background-position: 0 -508px;
                &:hover{
                    background-position: 0 -578px;
                }
            }
            .dots{
                position: absolute;
                top: 310px;
                left: 0;
                width: 730px;
                height: 20px;
                text-align: center;
                .pg{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url(../../static/img/banner/banner.png) 0 9999px no-repeat;
                    background-position: 4px -343px;
                    &.active{
                        background-position: -16px -343px;
                    }
                }
            }
            .download {
                position: absolute;
                top: 0;
                z-index: 20;
                right: -1px;
                width: 254px;
                height: 336px;
                background: url(../../static/img/banner/download.png);
                a{
                    display: block;
                    width: 215px;
                    height: 56px;
                    margin: 212px 0 0 19px;
                    background-position: 0 9999px;
                    text-indent: -9999px;
                    &:before, &:after{
                        display: block;
                        _display: none;
                        content: '';
                        position: absolute;
                        top: 0;
                        width: 20px;
                        height: 336px;
                        background: url(../../static/img/banner/banner.png) 0 9999px no-repeat;
                    }
                    &:before{                        
                        left: -20px;
                        background-position: -1px 0;
                    }
                    &:after{                        
                        left: auto;
                        right: -20px;
                        background-position: -20px 0;
                    }
                }
                p{
                    margin: 10px auto;
                    text-align: center;
                    color: #8d8d8d;
                }
            }
        }
    }

</style>
<script>
    export default {
        props: {
            width: { //宽度
                type: [Number, String],
                default: '100%'
            },
            height: { //高度
                type: [Number, String],
                default: '100%'
            },
            playIndex: { //指定从哪张图片开始轮播
                type: Number,
                default: 0
            },
            autoplay: { //是否自动播放
                type: Boolean,
                default: true
            },
            duration: { //自动播放间隔,单位是毫秒
                type: Number,
                default: 1000,
            },
            data: { //banner数据
                type: Array,                
                /**
                 * 数组每一项参数
                 * img_src: 图片url
                 * bg_src: 背景图url
                 * url: 跳转链接，如果有
                 * title: 图片标题
                 */
                default: [
                    {
                        img_src: '',
                        bg_src: '',
                        url: '',
                        title: ''
                    }
                ]
            },
        },
        data(){
            return {
                autoPlayer: null, //自动播放对象
                index: this.playIndex, 
                style: 'transition: none; opacity: 1;',
            }
        },
        methods: {
            //上一张图片
            prev(){
                this.index--;
                if(this.index < 0){
                    this.index = this.data.length-1;
                }
            },
            //下一张图片
            next(){
                this.index++;
                if(this.index > this.data.length-1){
                    this.index = 0;
                }
            },

        },
        mounted(){
            if(this.autoplay){
                //自动播放
                this.autoPlayer = setInterval(()=>{
                    this.style='transition: none; opacity: 1;';
                    this.next();
                    setTimeout(()=>{
                        this.style='transition: opacity '+(this.duration/2000)+'s ease-in 0s; opacity: '+(this.duration/20000)+';'
                    }, this.duration/2);
                }, this.duration);
            }
        },
        created(){

        }
    }
</script>