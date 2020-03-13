<template>
  <div>
    <div class="ad">
      <div class="ad_top">
        <img src="../assets/jrtj/ad.jpg" alt />
      </div>
      <div class="ad_bottom">
        <ul class="list">
          <li>
            <img src="../assets/jrtj/ad1.jpg" alt />
          </li>
          <li>
            <img src="../assets/jrtj/ad2.jpg" alt />
          </li>
          <li>
            <img src="../assets/jrtj/ad3.jpg" alt />
          </li>
        </ul>
      </div>
      <div>
        <img src="../assets/jrtj/zp.jpg" alt />
      </div>
      <div class="tabs_con">

      
      <div @touchmove="slideMove" class="tabs" @touchstart="slideStart()" @touchend="slideEnd">
        <ul class="slide_list">
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li>
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          <li class="ok">
            <img src="../assets/jrtj/tab.png" alt />
            <span>女装</span>
          </li>
          
        </ul>
    </div>
    <div class="scroll_con">
        <div class="scroll_bar" :style="`transform:translate(${scollX},0)`"></div>
    </div>
      </div>
        <!-- <img src="../assets/xxx.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';

let mySwiper;
export default {
  data() {
    return {
        scollX:'',
    };
  },
  mounted() {
    this.$root.eventHub.$on("swiper", this.init);
    //  this.mySwiper = this.$store.state.swiper



  },
  methods: {
    init(swiper) {
      this.mySwiper = swiper;
        let ok = document.getElementsByClassName('tabs')[0]
        //滚动条能移动的最大值
        let scroll_con = document.getElementsByClassName('scroll_con')[0].offsetWidth
        let scroll_bar = document.getElementsByClassName('scroll_bar')[0].offsetWidth
        let scollMax = scroll_con - scroll_bar
        let slide_list = document.getElementsByClassName('slide_list')[0].offsetWidth
        let scollMax1 = slide_list-document.body.clientWidth
        this.ok = ok 
        this.scollMax = scollMax
        this.scollMax1 = scollMax1
    },
    slideStart(e) {
        this.mySwiper.allowTouchMove = false;
        
    },
    slideEnd(e) {
        this.mySwiper.allowTouchMove = true;
    },
    slideMove(){

        let ml = this.ok.scrollLeft/this.scollMax1*this.scollMax
        
        this.scollX = ml+'px'
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.ad_top {
}
.ad_bottom {
  .list {
    display: flex;
  }
}


.tabs_con{
    position: relative;
    .scroll_con{
    position: absolute;
    width: 14%;
    height: .093333rem;
    background: rgb(215, 216, 220);
    bottom: .08rem;
    left: 50%;
    transform: translate(-50%,0) translate3d(0,0,0);
    border-radius: .266667rem;
    .scroll_bar{
        width: 80%;
        background: rgb(224, 61, 150);
        height: .093333rem;
        position: absolute;
        border-radius: .266667rem;
        top: 0;
        transform:translate3d(0,0,0);
        // transition: all 0.1s;
    }
}


.tabs {
  white-space: nowrap; //强制一行
  overflow-x: auto;
  background: rgb(255, 242, 234);
padding-bottom: .266667rem;

  ul {
    width: 11.2rem;
    height: 100%;
    overflow: hidden;
    // position: relative;
    

    li {
      width: 1.866667rem;
      height: 100%;
      float: left;
      
      position: relative;
      img {
        width: 1.866667rem;
      }
      span{
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translate(-50%,0);
          font-size: .32rem;
      }
    }
    li::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%,-65%);
      width: 60%;
      display: block;
      z-index: 100;
      height: 55%;
      border: .001333rem solid rgb(243, 220, 210);
    //   box-shadow: 0 .013333rem .026667rem;
      border-radius: 50%;
    }
  }
  }
}
</style>