<template>
  <b-card align="left" no-body>
    <cart-header v-if="!isEmpty" :selected="selected" @update:selected="$emit('update:selected', $event)"></cart-header>

    <b-card-body v-if="isEmpty" align="center">
      <h3>Корзина пуста</h3>
    </b-card-body>

    <cart-list
      v-else
      :selected="selected"
      :cart-goods="cartGoods"
      @update:selected="$emit('update:selected', $event)"
    ></cart-list>
  </b-card>
</template>

<script>
import CartList from "@/components/CartView/CartList.vue";
import CartHeader from "@/components/CartView/CartHeader.vue";

export default {
  name: "Cart",
  components: {
    CartList,
    CartHeader,
  },
  props: {
    cartGoods: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isEmpty() {
      return this.cartGoods.length === 0;
    },
  },
};
</script>
