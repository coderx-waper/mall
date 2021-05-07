<template>
    <div id="home">
        <!-- <NavBar>
            <template v-slot:center>
                <div>开心一刻~</div>
            </template>
        </NavBar> -->

        <van-swipe :autoplay="5000" class="my-swipe" :style="swiperstyle">
            <van-swipe-item v-for="(item, index) in banners" :key="index">
                <img v-lazy="item.image" />
            </van-swipe-item>
        </van-swipe>

        <recommend  :recommends="recommends" />
        
    </div>
</template>


<script>
// import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata }  from 'network/home'
import recommend from './childCpns/recommend'

export default {
    name: 'Home',
    data(){
        return {
            banners:[] ,//轮播图数据
            recommends:[],//推荐数据
            height:200,// 默认200高度
            zoom:1,// 缩放比
            fullWidth: document.documentElement.clientWidth //当前屏幕宽度
        }
    },
    components: {
        // NavBar,
        recommend

    },
    created(){
        getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            this.zoom = this.banners[0].width/this.banners[0].height;
        })
    },
    computed:{
        swiperstyle(){
            // 根据图片确定宽度
            const realHeight = this.fullWidth / this.Zoom;
            console.log('realHeight', realHeight);
            return realHeight ?{ height: realHeight + 'px' } :{ height: this.height + 'px' };
        }
    }
}
</script>


<style>

.my-swipe img{
    width: 100%;
    height: 100%;
}
</style>
