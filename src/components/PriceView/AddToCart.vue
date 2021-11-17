<template>
  <b-form inline @submit.stop.prevent="addToCart" class="form-nowrap">
    <count-input v-model="count"></count-input>

    <b-button type="submit" variant="danger" :disabled="!isValidCount" class="btn-to-cart text-nowrap ml-2">
      В корзину
    </b-button>
  </b-form>
</template>

<script>
import CountInput from "@/components/CountInput.vue";

export default {
  name: "AddToCart",
  components: {
    CountInput,
  },
  props: {
    uid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    addToCart() {
      if (this.isValidCount) {
        this.$store.commit("addGoodToCart", {
          uid: this.uid,
          count: this.count,
        });
      }
    },
  },
  computed: {
    isValidCount() {
      return this.count !== null && this.count > 0 && Math.floor(this.count) === Math.ceil(this.count);
    },
  },
};
</script>

<style scoped>
.form-nowrap {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.btn-to-cart {
}
</style>
