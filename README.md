# meta-route


https://github.com/wilf312/vue-meta-route/blob/master/src/main.js

```
// main.js
// タイトル設定
router.afterEach((to, _) => {
  document.title = to.meta.hasOwnProperty('title') ? to.meta.title : 'default'
})

```

https://github.com/wilf312/vue-meta-route/blob/master/src/router.js
```
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        title: 'about'
      }
    }
  ]
});
```




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
