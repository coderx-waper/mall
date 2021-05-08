<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>


<script>

import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    props:{
        probeType:{
            type:Number,
            defalut:0
        },
        pullUpLoad:{
            type:Boolean,
            defalut:false
        }
    },
    data() {
      return {
        scroll: null,
      }
    },

    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            pullUpLoad: this.pullUpLoad,
            probeType: this.probeType,
            click: true,
        })

        // 监听上拉刷新
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp');
        })

        console.log('BScroll', this.scroll)
    },
    methods:{
        // 更新滚动区域
        refresh(){
            this.scroll.refresh()
        },

        // 结束加载
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>


<style scoped>

</style>
