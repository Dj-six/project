<template>
  <div class="check-button">
    <img v-if="isSelect" src="@/assets/img/detail/select.svg" alt="">
    <img v-else src="@/assets/img/detail/no-select.svg" alt="">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isSelect: {
      type:Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .check-button {
    display: flex;
  }
  .check-button img {
    width: 20px;
    height: 20px;
    color: #ccc;
  }
</style>