<template>
  <price-list :items="items"></price-list>
</template>

<script>
import PriceList from "@/components/PriceView/GoodsList.vue";

export default {
  name: "PriceView",
  components: {
    PriceList,
  },
  computed: {
    items() {
      return this.$store.state.goods;
    },
  },
};
</script>
