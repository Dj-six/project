<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick"/>
    <scroll class="content">
      <detail-swiper :top-images='topImages'/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop'/>
      <detail-goods-info :detail-info='detailInfo'/>
    </scroll>
    <detail-tab-bar @addCart="addCart"/>
  </div>

</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import DetailSwiper from './detailChild/DetailSwiper'
  import DetailBaseInfo from './detailChild/DetailBaseInfo'
  import DetailShopInfo from './detailChild/DetailShopInfo'
  import DetailGoodsInfo from './detailChild/DetailGoodsInfo'
  import DetailTabBar from './detailChild/DetailTabBar'
  
  

  import Scroll from '@/components/common/scroll/Scroll'

  import {getDetail,Goods,Shop} from '@/network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages:null,
        goods: {},
        shop: {},
        detailInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailTabBar
    },
    methods: {
      addCart() {
        // 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 将商品添加到购物车里
        this.$store.dispatch('addCart',product)
      }
    },
    created() {
      // 导航守卫
      document.title = '商品详情'
      // 保存传入的iid
      this.iid = this.$route.params.iid
      
      // 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        
        const data = res.result
        // 获取轮播图图片
        this.topImages = data.itemInfo.topImages
        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 获取店铺信息的对象
        this.shop = new Shop(data.shopInfo) 
        // 保存商品的详情数据
        this.detailInfo = data.detailInfo
      })
    }
  }
</script>


<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>