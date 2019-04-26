import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// タイトル設定
router.afterEach((to, _) => {
  document.title = to.meta.hasOwnProperty('title') ? to.meta.title : 'default'
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
