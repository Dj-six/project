<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goods:{
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin: 10px 5px;
  }
  .info-title {
    text-indent: 0.5em;
    color: black;
  }

  .info-price {
    margin-top: 15px;
    position: relative;
  }
  .n-price {
    font-size: 18px;
    color: var(--color-high-text);
  }
  .o-price {
    margin: 0 6px;
    font-size: 12px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 12px;
    background-color: var(--color-high-text);
    color: #fff;
    padding: 3px;
    border-radius: 12px;
    position: absolute;
    top: -5px;
  }
  .info-other {
    margin-top: 6px;
    line-height: 30px;
    font-size: 12px;
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 2px solid rgba(0,0,0,.1);
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>