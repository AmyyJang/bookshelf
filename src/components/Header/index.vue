<template>
  <div class="header">
    <div class="header-title"> 优腾爱读书</div>
  </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style lang="scss" scoped>

.header {
    background-color: #ff8189;
    height: 48px;
    line-height: 48px;
    text-align: center;
    display: flex;
    color: #fff;
    .header-title {
        flex: 1;
        font-size: 20px;
    }
}
</style>