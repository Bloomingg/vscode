<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item,index) in title"
          :key="index"
          class="centerItem"
          @click="itemClick(index)"
          :class="{active:index===currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.center {
  display: flex;
  font-size: 12px;
}
.centerItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 7px;
}
</style>