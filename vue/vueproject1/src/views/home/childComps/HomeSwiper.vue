<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" width="100%" height="auto" @load="swipeImageLoad" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
  </swiper>-->
</template>

<script>
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    swipeImageLoad() {
      if (!this.isLoad) {
        this.$emit("swipeImageLoad");
        this.isLoad = true;
      }
    },
  },
  components: {
    // Swiper,
    // SwiperItem,
  },
};
</script>

<style>
/* .van-swipe {
  width: 100%;
  height: 100%;
}
.van-swipe img {
  width: 100%;
  height: 100%;
  /* pointer-events: none; */
/* }
.swiper {
  width: 100%;
  height: 3.4rem;
} */
</style>