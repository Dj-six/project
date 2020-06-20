<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :is-select="itemInfo.select" @click.native="selectClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkbutton/CheckButton'
  export default {
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      selectClick() {
        this.itemInfo.select = !this.itemInfo.select
      }
    }
  }
</script>

<style scoped>
  .item-selector {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cart-list-item {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 13px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-price {
    color: #ff5000;
  }
</style>>