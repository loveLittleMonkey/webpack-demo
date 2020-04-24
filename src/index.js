// import Vue from "vue"; // 在index.html 引入，Vue被注入在html中
import App from "./index.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
