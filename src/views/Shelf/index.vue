<template>
  <div class="shelf">
    <Header/>
    <Search/>
      <ul class="order">
          <li v-for="(item,index) in orders" :key="index" @click="listOrder(item.id)">
              <span class="order-text">{{item.text}}</span>
              <span class="arrow"></span>
        </li>
      </ul>
      <!-- 定义书籍列表 -->
      <div>
        <Book v-for="(item, index) in dealList" :key="index" :data="item">
        </Book>
      </div>
      <!-- 加载更多 -->
      <div class="loader-more" @click="showOthers" v-show="others.length">
          <span>查看其它{{others.length}}本书籍</span>
          <span class="arrow">
              <span class="arrow white"></span>
          </span>
      </div>
      
      <tab-bar/>
  </div>
</template>

<script>
import Header from 'components/Header'
import TabBar from 'components/TabBar'
import Book from 'components/Book'
import Search from 'components/Search'

export default {
  components: { 
    Header,
    TabBar,
    Search,
    Book
    },
//数据
    data() {
        return {
            //排序数据
            orders: [
                { text: '书名排序', id: 'title' },
                { text: '评分排序', id: 'stars' },
                { text: '作者排序', id: 'author' }
            ],
            //初始化
            list:[],
            //存储未显示的
            others: []
        }
    },
    //计算属性
    computed: {
        //用store中的搜索词来处理
        dealList() {
            //返回值是结果
            //数组做过滤用filter方法
            //过滤的是title，判断title是否包含search搜索词
            // return this.list.filter(item => item.title.indexOf(this.$store.state.search) >= 0)
            
            return this.list.filter(item => item.title.toUpperCase()
            .indexOf(this.$store.state.search.toUpperCase()) >= 0)
            
            //正则处理
            //定义正则
            // let reg = new RegExp(this.$store.state.search,'i');
            // return this.list.filter(item => reg.test(item.title))
        }
    },
    //定义方法
    methods: {
        //展示剩余的
        showOthers(){
            //将other中的数据存储在list中
            this.list = this.list.concat(this.others);
            //清空others
            this.others = [];
        },
        //数据排序
        listOrder(id) {
            // console.log(id);
            //视图的排序就是对数据的排序，就是对数组的排序
            this.list.sort((a, b) => {
                //返回值是排序的条件
                //升序
                // return a[id] - b[id]
                //降序
                return b[id] - a[id]
            })
        }
    },
    //创建完成
    created() {
        // console.log(this)
        //发送请求
        this.$http.get('/data/books.json?id=' + this.$route.params.id)
        //监听数据返回
        .then(({ data }) => {
            //存储显示的数据
            this.list = data.books.slice(0, 3);
            //存储未显示的数据
            this.others = data.books.slice(3);
            
            })
    },
}
</script>

<style>

.order{
   background: #fff;
   display: flex; 
}

.order li{
    flex: 1;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 32px;
    list-style: none;
    position: relative;
}

.order li:last-child {
    border-right: none;
}

.order li .arrow {
    border: 8px solid transparent;
    border-top-color: #ff8189;
    top: 12px;
    left: 100px;
}
.order li span.order-text {
    font-size: 14px;
    color: #666;
}


.loader-more {
    background: #fff;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    color: #ff8189;
    text-align: center;
    line-height: 40px;
}
.loader-more .arrow {
    border: 8px solid transparent;
    border-top-color: #ff8189;
    position: relative;
    top: -1px;
    left: 4px;
}
.loader-more .arrow .white{
    border: 8px solid transparent;
    border-top-color: #fff;
    position: absolute;
    top: -10px;
    left: -8px;
}
</style>