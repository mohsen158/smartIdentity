import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import page1 from './views/page1.vue'
Vue.use(Router);

/* ... */

// Vue.use(SuiVue);
export default new Router({
  routes: [{ path: "/",
  name: "homea",
  component: Home},
    {
      path: "/page1",
      name: "homea",
      component: page1
    },
    {
      path: "/verifyIdentity",
      name: "homes",
      component: Home
    }
  ]
});
