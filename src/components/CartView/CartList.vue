<template>
  <b-list-group flush>
    <cart-item
      v-for="good in cartGoods"
      :key="good.uid"
      :cart-good="good"
      :selected="isSelectedItem(good.uid)"
      @change-selected="onChangeSelected($event, good.uid)"
    ></cart-item>
  </b-list-group>
</template>

<script>
import CartItem from "@/components/CartView/CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
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
  methods: {
    isSelectedItem(uid) {
      return this.selected.indexOf(uid) >= 0;
    },

    onChangeSelected(newValue, uid) {
      const newSelected = newValue ? this.addToSelected(uid) : this.delFromSelected(uid);
      this.$emit("update:selected", newSelected);
    },
    addToSelected(uid) {
      const newSelected = this.selected.slice();
      newSelected.push(uid);
      return newSelected;
    },
    delFromSelected(uid) {
      const newSelected = this.selected.slice();
      const idx = newSelected.indexOf(uid);
      newSelected.splice(idx, 1);
      return newSelected;
    },
  },
};
</script>

<style scoped></style>
