<template>
    <div>
        <div @click="xxx">ok</div>
        <van-skeleton
  title
  avatar
  
  title-width="100px"
  :loading="loading"
  :animate="false"
>
  <div>实际内容</div>
</van-skeleton>
<img v-for="img in imageList" v-lazy="img" :key="img">
    </div>
</template>
<script>

import Vue from 'vue';
import { Skeleton,Lazyload } from 'vant';
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(Skeleton,Lazyload);



export default {
  data() {
    return {
      loading: true,
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  mounted() {
    
  },
  methods:{
      xxx(){
          this.loading = false;
      }
  }
};
</script>
<style lang="scss" scoped>
img{
    width:100%;
}
</style>