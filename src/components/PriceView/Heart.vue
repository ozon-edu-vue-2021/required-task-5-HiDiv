<template>
  <component :is="currentHeart" @click="onClick" font-scale="2" class="heart"></component>
</template>

<script>
import { BIconHeart, BIconHeartFill } from "bootstrap-vue";

export default {
  name: "Heart",
  components: {
    BIconHeart,
    BIconHeartFill,
  },
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$store.commit("setFavorite", { uid: this.good.uid, favorite: !this.good.favorite });
    },
  },
  computed: {
    currentHeart() {
      return this.good.favorite ? "BIconHeartFill" : "BIconHeart";
    },
  },
};
</script>

<style scoped>
.heart {
  cursor: pointer;
  color: #ff1900;
}
</style>
