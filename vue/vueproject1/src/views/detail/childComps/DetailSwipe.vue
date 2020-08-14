<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" width="100%" height="auto" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailSwipe",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.van-swipe {
  height: 300px;
  overflow: hidden;
}
</style>