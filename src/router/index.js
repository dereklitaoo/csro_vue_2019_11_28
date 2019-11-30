import Vue from "vue";
import VueRouter from "vue-router";
import Infodash from "../views/01-Infodash.vue";
import Scenes from "../views/02-Scenes.vue";
import Roomarea from "../views/03-Roomarea.vue";
import Environment from "../views/04-Environment.vue";
import Devicemanage from "../views/05-Devicemanage.vue";
import About from "../views/06-About.vue";

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
  },
  {
    path: "/Roomarea",
    name: "Roomarea",
    component: Roomarea
  },
  {
    path: "/Environment",
    name: "Environment",
    component: Environment
  },
  {
    path: "/Devicemanage",
    name: "Devicemanage",
    component: Devicemanage
  },
  {
    path: "/About",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
