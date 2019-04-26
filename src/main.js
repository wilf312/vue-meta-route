import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let titleBackup = null

// タイトル設定
router.afterEach((to, _) => {
  if (!titleBackup) {
    titleBackup = document.title
  }
  document.title = to.meta.hasOwnProperty('title') ? to.meta.title : titleBackup
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
