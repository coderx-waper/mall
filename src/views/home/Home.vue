<template>
    <div>
        <h2>{{ $store.state.info }}</h2>
        <h1>{{ $store.state.name }}</h1>
        <h1>{{ $store.getters.more20Age(15) }}</h1>
        <h1>{{ $store.getters.more20AgeLength }}</h1>
    
        <button @click="addStu">添加一个学生</button>
    
        <h3>Vuex----------------------------</h3>
        <h2>全局counter：{{ $store.state.counter }}</h2>
        <button @click="increment(5)">+5</button>
    
    
    
    
    </div>
</template>


<script>
import { request } from '../../network'

export default {
    name: 'Home',
    methods: {
        addStu() {
            this.$store.commit('addStu', { name: 'why', age: 55 })
        },
        increment() {
            // this.$store.dispatch('incrment', value).then(res=>{
            //     console.log('res', res)
            // });

            // for (const plug in this.$store.state.stu) {
            //     // 判断该原型上面是否存在键值 plug
            //     if (Object.prototype.hasOwnProperty.call(this.$store.state.stu, plug)) {
            //         const el = this.$store.state.stu[plug]
            //         console.log('el', el)
            //     }
            // }

            // this.$store.commit('increment', value)
        }
    },
    created() {
        request({
            url:'/status',
            params:{
                codes:20
            }
        }).then(res=>{
            console.log('res', res)
        }).catch(err=>{
            console.log('err', err)
        })
    }

}
</script>


<style>

</style>
