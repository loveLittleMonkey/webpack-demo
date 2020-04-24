// import Vue from "vue"; // 在index.html 引入，Vue被注入在html中
import App from "./index.vue";
import maxUI from "vue-max-ui";
import "vue-max-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(maxUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
