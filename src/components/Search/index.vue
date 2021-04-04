<template>
  <div class="search">
      <input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字">     
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
</style>