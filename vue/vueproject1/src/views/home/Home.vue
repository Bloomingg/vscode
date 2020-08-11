<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollTop"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommond-view :recommends="recommends"></recommond-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentTitle].list"></goods-list>
    </scroll>

    <!-- 通过native修饰符 监听组件的原生事件 -->
    <back-top @click.native="backTop" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommondView from "./childComps/RecommondView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
// import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {
      currentTitle: "pop",
      isShowBack: false,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTitle = "pop";
          break;
        case 1:
          this.currentTitle = "new";
          break;
        case 2:
          this.currentTitle = "sell";
          break;
      }
    },
    backTop() {
      // console.log("1111");
      // this.$refs.scroll.scroll.scrollTo(0, 0);
      this.$refs.scroll.scrollTo(0, 0);
    },
    scrollTop(position) {
      // console.log(position);
      this.isShowBack = -position.y > 500;
    },
    loadMore() {
      this.getHomeGoods(this.currentTitle);
    },
    // 网络请求

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 取出下一页的数据
      const page = this.goods[type].page + 1;
      console.log(page);
      // 取出对应类型和页数的数据
      getHomeGoods(type, page).then((res) => {
        // 将取出的数据加到list
        this.goods[type].list.push(...res.data.list);
        // 当前已加载的页数+1
        // this.$refs.scroll.scroll.refresh();
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        // this.$refs.scroll.scroll.refresh();
      });
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommondView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    // Swiper,
    // SwiperItem,
  },
};
</script>
<style scoped>
#home {
  padding: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>