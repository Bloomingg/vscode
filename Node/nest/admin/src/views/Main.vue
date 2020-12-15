<template>
  <el-container direction="vertical">
    <el-header height="">
      TS后台管理
      <!-- Header content -->
    </el-header>
    <el-container direction="horizontal">
      <el-aside width="200px">
        <!-- Aside content -->
        <el-menu
          mode="vertical"
          style="height: 100vh"
          :default-active="$route.path"
          router
        >
          <el-submenu
            v-for="(submenus, index) in menus"
            :index="submenus.title"
            :key="`menu-item-${index}`"
          >
            <template slot="title">{{ submenus.title }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.menus"
              :index="item.path"
              :key="`menu-item-${index}-${subIndex}`"
            >
              {{ item.title }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <el-main height="">
          <!-- Main content -->
          <router-view :key="$route.path"></router-view>
        </el-main>
        <el-footer height="">
          <!-- Footer content -->
          我是底部
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Main extends Vue {
  menus = [
    {
      title: "内容管理",
      menus: [
        { title: "首页", path: "/" },
        { title: "课程管理", path: "/courses/list" },
        { title: "课时管理", path: "/episodes/list" },
      ],
    },
    {
      title: "运营管理",
      menus: [
        { title: "首页", path: "/" },
        { title: "用户管理", path: "/user/list" },
      ],
    },
  ];
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
</style>
