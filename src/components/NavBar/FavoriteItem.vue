<template>
  <b-nav-item to="/favorite" exact exact-active-class="active" :disabled="favoriteCount < 1">
    Избранное
    <b-badge v-if="favoriteCount > 0" variant="primary" pill>{{ favoriteCount }}</b-badge>
  </b-nav-item>
</template>

<script>
export default {
  name: "FavoriteItem",
  computed: {
    favoriteCount() {
      return this.$store.getters.favoriteGoods.length;
    },
  },
};
</script>

<style scoped></style>
