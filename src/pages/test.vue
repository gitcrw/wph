<template>
    <div>
        <div class="tabs">
          <ul>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
              <li><img src="../assets/jrtj/tab.png" alt=""></li>
          </ul>
      </div>
    </div>
</template>
<style lang="scss" scoped>

    .tabs{
         white-space:nowrap;//强制一行
        overflow-x:auto; 
    }
    ul{
        width: 11.2rem;
        height: 100%;
        // display: flex;
        // flex-wrap: wrap;
        justify-content: space-around;
    }
    li{
        width: 1.866667rem;
        height: 100%;
        float: left;
        background: red;
        img{
            width: 1.866667rem;
        };
    }
</style>