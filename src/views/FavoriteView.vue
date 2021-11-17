<template>
  <price-list v-if="items.length > 0" :items="items"></price-list>

  <h3 v-else>Нет отобранных товаров</h3>
</template>

<script>
import PriceList from "@/components/PriceView/GoodsList.vue";

export default {
  name: "FavoriteView",
  components: {
    PriceList,
  },
  computed: {
    items() {
      return this.$store.getters.favoriteGoods;
    },
  },
};
</script>
