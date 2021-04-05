import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //搜索数据
      search: ''
  },
  mutations: {
      //更新数据
      updateSearch(state,value) {
          state.search = value;
      }
  },
  actions: {

  },
  modules: {
  }
})
