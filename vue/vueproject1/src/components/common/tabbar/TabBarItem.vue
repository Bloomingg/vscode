<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>
    <div class="text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
#tab-bar-item {
  flex: 1;
}

.icon img,
.active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>