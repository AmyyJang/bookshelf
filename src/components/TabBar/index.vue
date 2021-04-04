<template>
  <div class="tabbar">
      <ul>
          <router-link class="tabbar-item" tag="li" to="/home">
            <i class="iconfont icon-shouye"></i>
            <div class="item-text" >首页</div>
          </router-link>
          <router-link class="tabbar-item" tag="li" to="/shelf">
              <i class="iconfont icon-yuedu"></i>
            <div class="item-text" >书架</div>
          </router-link>
          <router-link class="tabbar-item" tag="li" to="/list">
              <i class="iconfont icon-dangan"></i>
            <div class="item-text" >书单</div>
          </router-link>
          <router-link class="tabbar-item" tag="li" to="/profile">
              <i class="iconfont icon-wode"></i>
            <div class="item-text" >我的</div>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style lang="scss" scoped>

.tabbar {   
    ul{
        display: flex;
        background-color: #ff8189;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        /* box-shadow: 0px -3px 1px rgba(100,100,100,0.8); */
        border-top: 1px solid #eee;
        li{
            flex: 1;
            text-align: center;
            height: 48px;
            font-size: 14px;
            color: #fff;
            i {
                font-size: 24px;
            }
          &.router-link-active{
            color: #fff700;
          }
        }
    }
}
</style>