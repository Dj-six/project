<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item ,index) in title" 
      class="title-item"
      :class="{isActive: index === currentIndex}"
      @click="itemClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('itemClick',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
  }
  .isActive {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 11px;
  }
</style>