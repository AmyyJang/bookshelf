<template>
  <div class="shelf">
    <Header/>
      <h1>这是shelf书架页面</h1>
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

<style>

</style>