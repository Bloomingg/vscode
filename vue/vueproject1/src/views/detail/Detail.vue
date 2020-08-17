<template>
  <div id="details">
    <detail-nav ref="nav" class="detail-nav" @titleClick="titleClick"></detail-nav>
    <scroll class="content2" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swipe :topImages="topImages"></detail-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-list="recommendInfo"></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- 通过native修饰符 监听组件的原生事件 -->
    <back-top @click.native="backTop" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwipe from "./childComps/DetailSwipe";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { debounce } from "@/common/utils";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTops: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBack: false,
    };
  },
  components: {
    DetailNav,
    DetailSwipe,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop,
  },
  created() {
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 获取轮播图
      this.topImages = res.result.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(res.result.shopInfo);

      this.detailInfo = res.result.detailInfo;

      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      if (res.result.rate.list) {
        this.commentInfo = res.result.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  mounted() {
    this.getThemeTopY = debounce(() => {
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTops);
    }, 200);

    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 通过事件总线监听
    this.$bus.$on("detailItemImagLoad", () => {
      // console.log("111");
      refresh();
      this.getThemeTopY();
    });
  },
  methods: {
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100);
    },
    contentScroll(position) {
      this.isShowBack = -position.y > 500;
      const positionY = -position.y;
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTops[i] &&
            positionY < this.themeTops[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTops[i]))
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    addToCart() {
      // 获取展示购物车所需信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;

      // 添加
      this.$store.dispatch("addCart", product);
    },
  },
};
</script>
<style scoped>
#details {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content2 {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 60px;
}
</style>