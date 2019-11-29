import Vue from "vue";
import VueRouter from "vue-router";
import Infodash from "../views/01-Infodash.vue";
import Scenes from "../views/02-Scenes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Infodash",
    component: Infodash
  },
  {
    path: "/Scenes",
    name: "Scenes",
    component: Scenes
  }
];

const router = new VueRouter({
  routes
});

export default router;
