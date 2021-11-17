<template>
  <b-row align-v="stretch">
    <b-col v-for="item of items" :key="item.uid" sm="12" md="6" lg="4">
      <good-card :good="item"></good-card>
    </b-col>
  </b-row>
</template>

<script>
import GoodCard from "@/components/PriceView/GoodCard.vue";

export default {
  name: "PriceList",
  components: {
    GoodCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
