<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    
    </div>
</template>


<script>
export default {
    name: 'recommend',
    props: {
        recommends: {
            type: Array,
            default () {
                return []
            }
        }
    },

}
</script>


<style scoped>
.recommend {
   display: flex;
   font-size: 12px;;
   text-align: center;
   padding: 10px 0 10px;
   border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;

}
.recommend-item img{
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}
.recommend-item div{
    color:#A9A9A9;
}

</style>
