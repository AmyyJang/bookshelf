<template>
  <div class="List">
    <Header title="优腾书单"/>
     
     <div class="list-content">
       <ul class="list-menu">
         <router-link tag="li" class="list-item" to="/list/read">
          <i class="iconfont icon-yuedu"></i>
          <span>已读</span>
         </router-link>
         <router-link tag="li" class="list-item" to="/list/forread">
          <i class="iconfont icon-tongxun"></i>
          <span>待读</span>
         </router-link>
         <router-link tag="li" class="list-item" to="/list/forbuy">
          <i class="iconfont icon-bianji"></i>
          <span>待购</span>
         </router-link>
         <router-link tag="li" class="list-item" to="/list/like">
          <i class="iconfont icon-xihuan"></i>
          <span>收藏</span>
         </router-link>
       </ul>


       <keep-alive>
         <div class="list-view">
            <router-view/>
         </div>
       </keep-alive>
       
     </div>

      <tab-bar/>
  </div>
</template>

<script>
import Header from 'components/Header'
import TabBar from 'components/TabBar'
export default {
  components: { 
    Header,
    TabBar
    },

}
</script>

<style lang="scss" scoped>
  .list-content{
    background: #eee;
    overflow: hidden;
    .list-menu {
      display: flex;
      background: #fff;
      .list-item{
        flex: 1;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #7b7b7b;
        border-bottom: 2px solid #ffffff;
        &.router-link-active{
          color: #ff8189;
          border-bottom: 2px solid #ff8189;
        }
      }
      .list-item-active{
        color: #ff8189;
        border-bottom: 2px solid #ff8189;
      }
      
    }
    .list-view{
      margin-left: 10px;
      background: #fff;
    }
  }
</style>