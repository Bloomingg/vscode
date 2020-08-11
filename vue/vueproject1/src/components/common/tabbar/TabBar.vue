<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.08);
  height: 49px;
  text-align: center;
}
</style>