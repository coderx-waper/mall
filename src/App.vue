<template>
    <div>
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'

export default {
    name: 'App',
    components: {
        TabBar
    }
}
</script>

<style>
@import './assets/css/base.css';
</style>
