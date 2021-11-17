import Vue from "vue";
import Router from "vue-router";

import Catalog from "../components/Catalog.vue";
import Cart from "../components/Cart.vue";
import Favourites from "../components/Favourites.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog,
    },
    {
      path: "/favourites",
      name: "favourites",
      component: Favourites,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
