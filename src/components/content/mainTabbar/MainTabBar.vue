<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff8198">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" >
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg" alt="" >
        <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff8198">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#ff8198">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff8198">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'
  export default {
    name: 'mainTabbar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>