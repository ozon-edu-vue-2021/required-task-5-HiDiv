<template>
  <b-nav-item to="/cart" exact exact-active-class="active">
    Корзина
    <b-badge v-if="countGoodTypesInCart > 0" variant="primary" pill>{{ countGoodTypesInCart }}</b-badge>
  </b-nav-item>
</template>

<script>
export default {
  name: "CartItem",
  computed: {
    countGoodTypesInCart() {
      return this.$store.state.cart.length;
    },
  },
};
</script>

<style scoped></style>
