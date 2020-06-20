<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control  class="tab-control" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick" 
                  ref="tabControl1"
                  v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import BackTop from '@/components/content/backTop/BackTop'
  import Scroll from '@/components/common/scroll/Scroll'

  import HomeSwiper from './childcomps/HomeSwiper'
  import RecommendView from './childcomps/RecommendView'
  import Feature from './childcomps/Feature'


  import {getHomeMultidata,getHomeGoods} from '@/network/home';


  export default {
    name : 'Home',
    components: {
      NavBar,
      TabControl,
      GoodsList,
      BackTop,
      Scroll,
      HomeSwiper,
      RecommendView,
      Feature
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0, list:[]},
          'new': {page:0, list:[]},
          'sell': {page:0, list:[]}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    created() {
      // 首页导航守卫
      document.title = '首页'
      // 请求多个数据
      this.getHomeMultidata()
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      
    },
    mounted() {
      // 图片加载防抖动
      const refresh = this.debounce(this.$refs.scroll.refresh,500)
      // 监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
      refresh()
      })
    },
    // 当页面活跃时触发这个函数
    activated() {
      // 刷新写在前面
      this.$refs.scroll.scroll.refresh()

      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    },
    // 当页面不活跃(离开)时触发
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {
      // 事件监听的方法
      tabClick(index) {
        switch(index) {
          case 0: 
            this.currentType = 'pop'
            break
          case 1:
            this.currentType ='new'
            break
          case 2:
            this.currentType = 'sell'
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        // 判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 判断tabControl是否吸顶(position: fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        // 获取tabControl的offsetTop (scroll的距离)
        // $el用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      
      // 防抖动的相关方法
      debounce(func,delay) {
        let timer = null
        return function(...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      },

      // 网络请求相关的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1 
          this.$refs.scroll.scroll.finishPullUp()
        })
      },
     
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff
  }
  .tab-control {
    /* 兼容性不行，但是移动端兼容，当达到top时position变为fixed */
    /* position: sticky; */
    /* top: 44px; */
    position: relative;
    z-index: 9;
  }

  .content {
    /* height: calc(100% - 93px); */
    /* margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .fixed {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
  }
</style>