<template>
  <div class="detail-tab-bar">
    <div class="bar-left container">
      <div class="bar-left-item">
        <img src="@/assets/img/detail/service.svg" alt="">
        <div class="title">客服</div>
      </div>
      <div class="bar-left-item">
        <img src="@/assets/img/detail/shop.svg" alt="">
        <div class="title">店铺</div>
      </div>
      <div class="bar-left-item">
        <img src="@/assets/img/detail/collect.svg" alt="">
        <div class="title">收藏</div>
       </div>
    </div>
    <div class="bar-right container">
      <div @click="addCart" class="bar-crat bar-right-item">加入购物车</div>
      <div class="bar-shop bar-right-item">购买</div>
    </div>
  </div>
</template>
<script>
  export default {
   methods: {
     addCart() {
       this.$emit('addCart')
     }
   }
  }
</script>


<style scoped>
  .detail-tab-bar {
    height: 49px;
    display: flex;
    font-size: 12px;
  }
  .bar-left {
    display: flex;
    flex-grow: 1;
    text-align: center;
  }
  .bar-left-item {
    flex: 1;
  }
  .bar-left img {
    width: 20px;
    height: 20px;
    margin-top: 4px;
  }
  .bar-left .title {
    margin-top: 4px;
  }

  .bar-right {
    display: flex;
    flex-grow: 1;
    line-height: 49px;
    font-size: 14px;
    text-align: center;
  }
  .bar-right-item {
    flex: 1;
  }
  .bar-crat {
    background-color: #ffe817;
    color: black;
  }
  .bar-shop {
    background-color: #f69;
    color: #fff;
  }
</style>