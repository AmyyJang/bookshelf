<template>
  <div class="book">
      <router-link :to="'/bookdetail/' + data.id" class="book-inner">
        <img :src="require('assets/img/bookscover/' + data.imgname)" alt="">
        <div class="content">
          <h3 class="book-title">《{{data.title}}》</h3>
          
            <p class="book-author">作者：{{data.author}}</p>
            <p class="book-stars">评分：{{data.stars}}</p>
            <p class="book-recording">简介：{{data.recording}}</p>
         
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "Book",
  //接收数据
  props: ['data'],
  created() {
    // console.log(this.data)
  },
}
</script>

<style lang="scss" scoped>

  .book {
    margin: 10px;
    /* padding: 10px; */
    overflow: hidden;
    border-bottom: 1px #eee solid;
    /* display: flex; */
    .book-inner{
      display: flex;
      flex-direction: row;
      justify-content: start;
      padding-bottom: 10px;
       img {
        width: 25%;
        /* width: 125px; */
        /* height: 180px; */
        flex: 1;
      }
      .content {
        padding-left: 10px;
        /* flex: 1; */
        overflow: hidden;
        .book-recording {
          height: 50px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;/*文字溢出的部分隐藏并用省略号代替*/
        }

        .book-title {
          padding-bottom: 10px;
        }
        .book-stars{
          color: #ff8189;
          margin: 10px 0px;
        }
      }
    }
  }
  

</style>