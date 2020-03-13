<template>
  <div id="app">
    <div class="fixed_top">
      <Top></Top>
      <Nav msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="visible"></div>
    <Swiper/>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Top from './components/top.vue'
import Swiper from './pages/main'


export default {
  name: 'App',
  components: {
    Nav,
    Swiper,
    Top
  }
}
</script>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{display: block;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.fixed_top{
  position: fixed;
  z-index: 100;
  width: 100%;

}
.visible{
  width: 100%;
  height: 2.013333rem;
}

.van-tab{
    line-height:.96rem;
}
.van-tabs__wrap{
  height: .96rem !important; 
  
}
 .van-tab__text{
    font-size: .346667rem;
    color: #fff;
    z-index: 10;
  }
.van-tabs__line{
  height: 50%;
  top:10%;
  // transform: translateY(0,-50%) !important;
  width: 2.133333rem !important;
  background-color:rgba(0, 0, 0, 0.5);
  
 
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
  border-width:0;
}


</style>
