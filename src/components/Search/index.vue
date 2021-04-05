<template>
  <div class="search">
      <div class="search-content">
        <i class="iconfont icon-chazhao"></i>
        <input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字">
      </div>
           
    </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    //展示搜索数据
    showSearchResult(){
      //发布消息
      this.$store.commit('updateSearch', this.msg);
      //清空数据
      this.$msg = '';
    }
  },
}
</script>
<style lang="scss" scoped>
.search {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    .search-content{
      flex: 1;
      position: relative;
      i{
        position: absolute;
        right: 18px;
        top: 5px;
        font-size: 24px;
        color: #7d7d7d;
      }
      input {
        font-size: 14px;
        background-color: #efefef;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 18px;
        display: block;
        width: 100%;
        flex: 1;
        color: #666;
    }
  }
}
</style>