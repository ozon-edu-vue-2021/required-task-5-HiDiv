<template>
  <b-card-header>
    <b-form-checkbox inline :checked="checked" :indeterminate="indeterminate" @change="onChange"
      >Выбрать все</b-form-checkbox
    >

    <b-button variant="link" :disabled="!hasSelected" @click="deleteSelected" class="text-danger"
      >Удалить выбранные</b-button
    >
  </b-card-header>
</template>

<script>
export default {
  name: "CartHeader",
  props: {
    selected: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange(newValue) {
      const newSelected = newValue ? this.$store.state.cart.map((item) => item.uid) : [];
      this.$emit("update:selected", newSelected);
    },
    deleteSelected() {
      const selected = this.selected.slice();
      this.$emit("update:selected", []);

      selected.forEach((uid) => {
        this.$store.commit("delGoodFromCart", uid);
      });
    },
  },
  computed: {
    checked() {
      return this.selected.length !== 0 && this.selected.length === this.$store.state.cart.length;
    },
    indeterminate() {
      return this.selected.length !== 0 && this.selected.length !== this.$store.state.cart.length;
    },
    hasSelected() {
      return this.selected.length > 0;
    },
  },
};
</script>
