<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <div v-if="!cartLength" class="cart-blank">
      <img src="@/assets/img/common/cart-blank.png" alt="">
      <h3>购物车为空，快去首页看看吧！</h3>
    </div>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bar/>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  import NavBar from '@/components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBar from './childComps/CartBar'

  import {mapGetters} from 'vuex'
  
  export default {
    components: {
      NavBar,
      CartList,
      Scroll,
      CartBar,
    },
    computed: {
      ...mapGetters([
        'cartLength'
      ])
    },
    created() {
      document.title = '购物车'
    },
    activated() {
      this.$refs.scroll.scroll.refresh
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart-blank{
    display: flex;
    margin-top: 200px;
    color: var(--color-tint);
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 90px;
    left: 0;
    right: 0;
    overflow: hidden;
  } 
 
</style>