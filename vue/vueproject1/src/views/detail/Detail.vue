<template>
  <div class="details">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll class="content2" ref="scroll">
      <detail-swipe :topImages="topImages"></detail-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwipe from "./childComps/DetailSwipe";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import Scroll from "components/common/scroll/Scroll";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
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
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 通过事件总线监听
    this.$bus.$on("detailItemImagLoad", () => {
      // console.log("111");
      refresh();
    });
  },
  // methods: {
  //   itemImagLoad() {
  //     this.$refs.scroll.refresh();
  //   },
  // },
};
</script>
<style scoped>
#details {
  position: relative;
  z-index: 99;
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
  height: 100vh;
  overflow: hidden;
}
</style>