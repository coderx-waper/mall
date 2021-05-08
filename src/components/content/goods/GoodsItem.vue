<template>
    <div class="GoodsItem">
        <img :src="GoodsItem.show.img" alt="" @load="imageLoaded">
        <div class="goods-info">
            <p>{{GoodsItem.title}}</p>
            <span class="price">{{GoodsItem.price}}</span>
            <span class="collect">{{GoodsItem.cfav}}</span>
        </div>
        
    </div>
</template>


<script>
export default {
    name: 'GoodsItem',
    props:{
        GoodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoaded (){
            // 事件总线
            this.$bus.$emit('imageLoaded');
        }
    }
}
</script>


<style scoped>
.GoodsItem{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
}
.GoodsItem img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    overflow: hidden;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.goods-info p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 5px;
}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
