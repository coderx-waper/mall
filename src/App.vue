<template>
    <div>
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'

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
