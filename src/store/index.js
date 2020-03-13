import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        nowIndex:'',
        swiper:''
    },
    mutations:{
        nowIndex(state,index){
            state.nowIndex = index
        },
        swiper(state,swiper_con){
            state.swiper = swiper_con
        }
    }
})

export default store;