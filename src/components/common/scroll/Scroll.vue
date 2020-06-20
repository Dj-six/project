<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      refresh() {
        this.scroll.refresh()
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, //让scroll区域可以触发点击事件
        //probeType为3的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
        probeType: this.probeType,
        //上拉加载更多，传入非false值为开启上拉加载，false为不开启
        pullUpLoad: this.pullUpLoad
      })
      //监听backtop事件是否触发并传给父组件
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
      // 监听上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
</script>


<style scoped>

</style>