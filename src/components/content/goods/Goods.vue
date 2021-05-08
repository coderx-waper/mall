<template>
    <div class="Goods">
      <GoodsItem   v-for="(item,index) in goods" :key="index" :GoodsItem='item'/>
    </div>
</template>


<script>

import GoodsItem from './GoodsItem'

export default {
    name: 'Goods',
    components:{
        GoodsItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>


<style scoped>
.Goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>