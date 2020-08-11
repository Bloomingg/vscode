<template>
  <div class="wraper" ref="wraper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wraper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载
    this.scroll.on("pullingUp", () => {
      // console.log("1111");
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>
<style scoped>
</style>
