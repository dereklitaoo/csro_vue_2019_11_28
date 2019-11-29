<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped dark color="blue-grey darken-1">
      <v-list two-line>
        <v-list-item class="align-center justify-center">
          <v-list-item-avatar tile width="180px">
            <v-img src="@/assets/logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          router
          :to="item.path"
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dense dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app dark color="primary">
      <v-layout justify-center>
        <v-flex shrink>&copy;&nbsp;2019&nbsp;CSRO</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      { icon: "mdi-view-dashboard", text: "信息总览", path: "/" },
      { icon: "mdi-home-city", text: "场景模式", path: "/Scenes" },
      { icon: "mdi-movie-outline", text: "房间区域", path: "/" },
      { icon: "mdi-air-conditioner", text: "环境天气", path: "/" },
      { icon: "mdi-bookmark-multiple", text: "设备管理", path: "/" },
      { icon: "mdi-bookmark-multiple", text: "关于我们", path: "/" }
    ]
  })
};
</script>


<style scoped>
.img {
  width: 200px;
}
</style>