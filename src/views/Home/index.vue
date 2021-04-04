<template>
  <div class="home">
    <!-- 头部bar -->
    <Header/>
    <!-- 首页---{{$store.state.search}} -->
    <Search/>
      <!-- 分类模块 -->
      <ul class="home-types">
          <router-link v-for="(item,index) in types" :key="index" tag="li"
          :to="'/cart/' + item.id">
              <!-- <img :src="'~assets/img/genre/' + item.img" alt=""> -->
              <img :src="require('assets/img/genre/' + item.img)" alt="">
              <p>{{item.text}}</p>
          </router-link>
      </ul>
      <!-- 定义广告模块 -->
      <div class="bookad">
          <router-link v-for="(item, index) in bookad" :key="index" tag="li">
              <h3>{{item.title}}</h3>
              <p></p>
          </router-link>
      </div>

        <!-- 商品列表 -->
        <div class="home-list">
            <p class="guess-title">猜你喜欢</p>
            <!-- 循环书籍 -->
            <Book v-for="(item, index) in books" :key="index" :data="item"></Book>
        </div>
  <tab-bar/>
  </div>
</template>

<script>
import Header from 'components/Header'
import TabBar from 'components/TabBar'
import BookList from 'components/BookList'
import Search from 'components/Search'

export default {
  components: { 
    Header,
    TabBar,
    BookList,
    Search
    },
//数据
    data() {
        return {
            //分类数据
            types: [
                { text: '童话', id: '1', img: 'muying.svg'},
                { text: '小说', id: '2', img: 'renliziyuan.svg'},
                { text: '军事', id: '3', img: 'qiche.svg'},
                { text: '技术', id: '4', img: 'yanfa.svg'},
                { text: '哲学', id: '5', img: 'luojisiwei.svg'},
                { text: '历史', id: '6', img: 'shichangyunying.svg'},
                { text: '宗教', id: '7', img: 'jichukecheng.svg'},
                { text: '艺术', id: '8', img: 'wenyuyingshi.svg'},
                { text: '金融', id: '9', img: 'touzi.svg'},
                { text: '教育', id: '10', img: 'peixun.svg'}
            ],
            //欲定义出数据
            bookad: [],
            books: []
        }
    },

    //组件创建完成请求数据
    created() {
        //发送请求
        this.$http.get('/data/books.json').then(({ data }) => {
            //存储数据
            this.bookad = data.bookad;
            this.books = data.books;

        })
    },
}
</script>
<style lang="scss" scoped>
.home-types {
    background: #fff;
    overflow: hidden;
}
.home-types li {
    width: 20%;
    float: left;
    text-align: center;
    list-style: none;
}
.home-types li img {
    width: 60%;
}

.home-types li p {
    font-size: 14px;
    color: #7d7d7d;
    padding: 8px 0 15px;
}

.home-list {
    margin-top: 10px;
    background: #fff;
}
.guess-title {
    padding: 10px;
    margin: 0 10px;
    font-size: 18px;
    color: #7d7d7d;
    border-bottom: 1px #eee solid;
}
</style>