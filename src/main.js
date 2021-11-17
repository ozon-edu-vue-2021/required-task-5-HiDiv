import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("loadGoods");
  },
}).$mount("#app");
