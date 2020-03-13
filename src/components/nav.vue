<template>
  <div class="nav">
    <!-- <ul class="nav">
      
      <li :class="nowIndex===index?'active':''"  v-for="(item,index) in navList" :key="item.name" @click="tabClick(index,item.path)">
        <div></div>
        <span>{{item.name}}</span>
      </li>
      
    </ul>-->
    <van-tabs  v-model="nowIndex"  @click="onClick" background="rgb(251, 80, 148)">
      <van-tab v-for="item in navList" :key="item.name" :title="item.name" ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

export default {
  data() {
    return {
      navList: [
        {
          name: "今日推荐",
          path: "/jrtj"
        },
        {
          name: "暖春行动",
          path: "/ncxd"
        },
        {
          name: "最后疯抢",
          path: "/zhfq"
        },
        {
          name: "唯品快抢",
          path: "/wpkq"
        },
        {
          name: "国际",
          path: "/gj"
        }
      ],
      nowIndex: 0
    };
  },
  methods: {
    //初始化
    init() {
      let path = this.$route.path;
      let index =
        path === "/home"
          ? 0
          : path === "/discover"
          ? 1
          : path === "/mine"
          ? 2
          : 0;
      this.nowIndex = index;
    },
    onClick(index, title) {
      if(this.navList[index].path!=this.$router.path){
        this.$router.push(this.navList[index].path);
      }
      //存全局
      this.$root.eventHub.$emit("changeTab", index);
    },
    slideTab(index) {
      console.log(index);
      let path =
        index === 0
          ? "/home"
          : index === 1
          ? "/discover"
          : index === 2
          ? "/mine"
          : 2;
      if (this.nowIndex != index) {
        this.$router.push(path);

      }
      this.nowIndex = index;
    }
  },
  mounted() {
    this.init();
    //滑动时触发
    this.$root.eventHub.$on("slideTab", this.slideTab);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0.266667rem 0.133333rem;
  width: 100%;
  display: flex;
  
}
li {
  display: inline-block;
  flex: 1;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.nav{
  margin-top: -0.026667rem;
  span{
    font: .4rem !important;
  }
}
li div {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  
}
.active {
  background: #42b983;
  color: #fff;
}
a {
  color: #42b983;
}

</style>
