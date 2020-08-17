<template>
  <scroll>
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },

  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>
