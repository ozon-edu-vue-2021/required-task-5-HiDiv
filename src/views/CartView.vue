<template>
  <b-row>
    <b-col md="8">
      <cart :selected.sync="selected" :cart-goods="cartGoods"></cart>
    </b-col>

    <b-col md="4">
      <receipt :selected="selected" :cart-goods="cartGoods"></receipt>
    </b-col>
  </b-row>
</template>

<script>
import Cart from "@/components/CartView/Cart.vue";
import Receipt from "@/components/CartView/Receipt.vue";

export default {
  name: "CartView",
  components: {
    Cart,
    Receipt,
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    cartGoods() {
      return this.$store.getters.cartWithGoods;
    },
  },
};
</script>
