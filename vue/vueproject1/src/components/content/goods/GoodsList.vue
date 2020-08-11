<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  /* 将内容均等分 */
  flex-wrap: wrap;
  /* 将剩余间距均分 */
  justify-content: space-evenly;
}
</style>