<template>
  <div class="cart-bar">
    <div class="cart-bar-left">
      <check-button class="check-button" :is-select="isSelectAll" @click.native="checkClick"><div class="all">全选</div></check-button>
    </div>
    <div class="cart-bar-right">
      <div class="total-price">合计：{{totalPrice}}</div>
      <div class="count">结算</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkbutton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.select
        }).reduce((preValue,item) => {
          return preValue  + item.price * item.count
        },0).toFixed(2)
      },
      isSelectAll() {
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.select)
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) { //全部选中
          this.cartList.forEach(item => item.select = false)
        }
        else{
          this.cartList.forEach(item => item.select = true)
        }
      }
    }
  }
</script>


<style scoped>
  .cart-bar {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #fff;
    position: absolute;
    justify-content: space-between;
    bottom: 49px;
    border-top: 1px solid #ccc;
  }
  .cart-bar-left {
    flex-grow: 1;
    margin-left: 20px;
  }
  .cart-bar-left .check-button {
    margin-top: 10px;
  }
  .cart-bar-left .all {
    margin-left: 6px;
  }
  .cart-bar-right {
    display: flex;
    flex-grow: 1;
    line-height: 40px;
    justify-content: space-between;
  }
  .cart-bar-right .total-price {
    color: #ff5000;
  }
  .cart-bar-right .count {
    width: 40%;
    height: 30px;
    background-color: #ff5000;
    color: #fff;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
    margin-right: 10px;
  }
</style>