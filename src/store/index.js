import Vuex from 'vuex'
import Vue from 'vue'
import {
    INCREMENT,
    ADDSTUDENT,
} from './mutations-types'


Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        
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