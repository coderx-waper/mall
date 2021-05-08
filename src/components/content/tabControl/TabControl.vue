<template>
    <div class="tabControl">
        <div v-for="(item,index) in titles" :key="index" class="tabControl-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TabControl',
    props: {
        titles: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('itemClick', index);
        }
    }
}
</script>


<style scoped>
.tabControl{
    line-height: 44px;
    height: 44px;
    display: flex;
    text-align: center;
    font-size: 15px;
    color:#696969
;
}
.tabControl .tabControl-item{
    flex: 1;
}
.tabControl-item span{
    padding: 3px;
}
.active{
    color:#d81e06
}
.active span{
    border-bottom: 3px solid #d81e06;
}
</style>
