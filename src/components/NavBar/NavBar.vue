<template>
  <b-navbar type="light" variant="light">
    <b-navbar-nav>
      <price-list-item></price-list-item>
      <cart-item></cart-item>
      <favorite-item></favorite-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import PriceListItem from "@/components/NavBar/PriceListItem.vue";
import CartItem from "@/components/NavBar/CartItem.vue";
import FavoriteItem from "@/components/NavBar/FavoriteItem.vue";

export default {
  name: "NavBar",
  components: {
    PriceListItem,
    CartItem,
    FavoriteItem,
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link.router-link-active {
  background-color: hsl(210deg 30% 90%);
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.8);
}
</style>
