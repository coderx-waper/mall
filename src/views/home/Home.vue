<template>
    <div id="home">
        <Scroll class="content" ref='scroll' @pullingUp="loadMore" :pull-up-load='true'>
            <van-swipe :autoplay="5000" class="my-swipe" :style="swiperstyle">
                <van-swipe-item v-for="(item, index) in banners" :key="index">
                    <img v-lazy="item.image" />
                </van-swipe-item>
            </van-swipe>
            <Recommend :recommends="recommends" />
            <FeatureView />
            <TabControl :titles="['流行','新款','精选']" @itemClick='itemClick' />
            <Goods :goods="showList" />
        </Scroll>
        <BackTop @click="$emit('topClick')" :probeType='1'/>
    </div>
</template>


<script>
//子组件
import Recommend from './childCpns/Recommend'
import FeatureView from './childCpns/FeatureView'

//公共组件
import TabControl from 'components/content/tabControl/TabControl'
import Goods from '../../components/content/goods/Goods'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

//数据请求
import { getHomeMultidata, getGoods } from 'network/home'


export default {
    name: 'Home',
    emits: ['topClick'],
    data() {
        return {
            banners: [], //轮播图数据
            recommends: [], //推荐数据
            height: 200, // 默认200高度
            zoom: 1, // 缩放比
            fullWidth: document.documentElement.clientWidth, //当前屏幕宽度
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] }
            },
            currentType: 'pop' // 当前类型
        }
    },
    components: {
        // NavBar,
        Recommend,
        FeatureView,
        TabControl,
        Goods,
        Scroll,
        BackTop

    },
    created() {
        // 请求banners数据
        this.homeMultidata()

        // 请求列表数据
        this.listData('pop')
        this.listData('new')
        this.listData('sell')

        // 监听图片加载完成 主要目的解决 better-scroll 不能滚动问题
        this.$bus.$on('imageLoaded',()=>{
            this.$refs.scroll && this.$refs.scroll.refresh()
        })

    },

    computed: {
        swiperstyle() {
            // 根据图片确定宽度
            const realHeight = this.fullWidth / this.zoom;
            return realHeight ? { height: realHeight + 'px' } : { height: this.height + 'px' };
        },
        showList() {
            return this.goods[this.currentType].list
        }
    },
    methods: {

        /**事件相关 */
        itemClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },

        topClick() {
            console.log('topClick', 'topClick')
        },

        /** 网络请求相关 */
        homeMultidata() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
                this.zoom = this.banners[0].width / this.banners[0].height;
            })
        },

        listData(type) {
            let page = this.goods[type].page + 1
            getGoods(type, page).then(res => {
                console.log('getGoods', res)
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
            })
        },

        // 加载更多数据
        loadMore(){
            this.listData(this.currentType)
            this.$refs.scroll.finishPullUp()
        }
    }
}
</script>


<style scoped>
#home {
    height: 100vh;
    position: relative;
}

.my-swipe img {
    width: 100%;
    height: 100%;
}

.content {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>
