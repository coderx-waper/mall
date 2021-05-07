import Vuex from 'vuex'
import Vue from 'vue'
import {
    INCREMENT,
    ADDSTUDENT,
} from './mutations-types'


Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        name:'coderz',
        counter:0,
        stu:[
            {name:'limei',age:10},
            {name:'cobe',age:25},
            {name:'carry',age:15},
            {name:'carry2',age:9},
            {name:'carry10',age:35}
        ],
        info:{
            name:'kobe',
            age:40
        }
    },
    // getters 相当于 computed 计算属性
    getters:{
        more20Age(state){
            return (age)=>{
                return state.stu.filter(s => s.age>age)
            }
        },
    },
    mutations:{
        [ADDSTUDENT](state,stu){
            state.stu.push(stu)
        },
        [INCREMENT](state,value){
            state.counter+=value
        }
    },
    actions:{

    },
    modules:{
       
    }
    
})

export default store