<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div  class="swiper-slide" v-for="(item) in list" :key="item.path">
            <keep-alive>
                <component :is="item.component" v-if="item.ok"></component>
            </keep-alive>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import Swiper from 'swiper';    
import 'swiper/css/swiper.min.css';

//组件
import jrtj from './jrtj';
import ncxd from './ncxd';
import zhfq from './zhfq';
export default {
    data(){
        return{
            list:[
                {path:'/jrtj',component:jrtj,ok:true},
                {path:'/ncxd',component:ncxd,ok:false},
                {path:'/zhfq',component:zhfq,ok:false},
            ],
            
        }
    },
    methods:{
    },
    mounted(){
        //初始化
        const mySwiper = new Swiper('.swiper-container', {
            initialSlide:this.$route.path==='/home'?0:this.$route.path==='/discover'?1:
                this.$route.path==='/mine'?2:0,
            // loop:true
        });
        //接收跳转序号
        this.$root.eventHub.$on('changeTab',(index)=>{
            console.log(index)
            this.list[index].ok = true
            mySwiper.slideTo(index,500,false)
        })

        //监听滑动的序号
        mySwiper.on('slideChangeTransitionEnd',()=>{
            console.log(mySwiper.realIndex)
            this.$root.eventHub.$emit('slideTab',mySwiper.realIndex)
            this.list[mySwiper.realIndex].ok = true
        })
        //存全局
        this.$root.eventHub.$emit("swiper", mySwiper);
        // this.$store.commit('swiper',mySwiper)
        
    },
}
</script>