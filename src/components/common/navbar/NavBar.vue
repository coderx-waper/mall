<template>
    <div class="nav-bar" :style="navBarStyle">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'NavBar',
    props:{
        backgroundColor: {
            type: String, // 背景颜色
            default: '#d81e06'
        },
        textColor:{
            type: String, // 文字颜色
            default: '#FFFFFF'
        }
    },
    computed:{
        navBarStyle(){
            return this.backgroundColor? { backgroundColor: this.backgroundColor , color: this.textColor }:{}
        }
    }
}
</script>


<style scoped>
.nav-bar {
    text-align: center;
    box-shadow: 0 1px rgba(100, 100, 100, 0.1);
    height: 44px;
    display: flex;
    line-height: 44px;
}

.left,
.right {
    width: 60px;
}

.center {
    flex: 1;
}
</style>