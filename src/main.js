import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import router from "./router/router.js";
import "normalize.css/normalize.css";
import "./styles/styles.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
