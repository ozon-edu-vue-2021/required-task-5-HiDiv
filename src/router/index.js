import Vue from "vue";
import VueRouter from "vue-router";
import PriceView from "../views/PriceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Price",
    component: PriceView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import(/* webpackChunkName: "cart" */ "../views/FavoriteView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
