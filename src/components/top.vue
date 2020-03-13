<template>
  <div>
    <div id="top">
      <div class="msg">
        <i class="iconfont icon-message"></i>
        <span>消息</span>
      </div>
      <div class="search">
        <div class="inputBar">
          <i class="iconfont icon-magnifier"></i>
          <input type="text" placeholder="搜索" />
        </div>
      </div>
      <div class="fl msg">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#top {
  display: flex;
  align-items: center;
  background: rgb(251, 80, 148);
  height: 1.066667rem;
  
  .msg {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size: .186667rem;
        color: #fff;
    }
    i {
      font-size: .533333rem;
      color: #fff;
    }
  }
  .search {
    text-align: center;
    flex: 6;
    .inputBar {
        position: relative;
        margin: 0 auto;
        width: 100%;
      i {
        position: absolute;
        left: 0.133333rem;
        top: 50%;
        transform: translate(0,-50%);
      }
      input {
        height: .666667rem;
        width: 100%;
        padding-left: 0.666667rem;
        border: 0;
        border-radius: .4rem;
      }
    }
  }
}
</style>
