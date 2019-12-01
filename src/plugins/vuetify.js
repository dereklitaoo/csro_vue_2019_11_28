import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);
Vue.use(Vuetify);

Vue.component("apexchart", VueApexCharts);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#00a2ae",
        secondary: "#00bcd4",
        accent: "#cddc39",
        error: "#ff9800",
        warning: "#ff5722",
        info: "#3f51b5",
        success: "#4caf50"
      }
    }
  }
});
