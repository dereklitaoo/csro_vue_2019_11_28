<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list two-line>
        <v-list-item class="align-center justify-center">
          <v-list-item-avatar tile width="180px">
            <v-img src="@/assets/logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.text" link>
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      { icon: "mdi-view-dashboard", text: "信息总览" },
      { icon: "mdi-home-city", text: "场景模式" },
      { icon: "mdi-movie-outline", text: "房间区域" },
      { icon: "mdi-air-conditioner", text: "环境天气" },
      { icon: "mdi-bookmark-multiple", text: "设备管理" },
      { icon: "mdi-bookmark-multiple", text: "关于我们" }
    ]
  })
};
</script>


<style scoped>
.img {
  width: 200px;
}
</style>