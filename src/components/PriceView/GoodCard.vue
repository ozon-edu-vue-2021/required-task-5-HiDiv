<template>
  <b-card
    :title="good.title"
    :sub-title="good.price + ' руб.'"
    :img-src="require('@/assets/images/' + good.image + '.webp')"
    img-top
    class="mb-4"
  >
    <b-card-text class="text-left two-line-only">{{ good.desc }}</b-card-text>

    <b-card-text>
      <add-to-cart :uid="good.uid"></add-to-cart>
    </b-card-text>

    <heart :good="good"></heart>
  </b-card>
</template>

<script>
import AddToCart from "@/components/PriceView/AddToCart.vue";
import Heart from "@/components/PriceView/Heart.vue";

export default {
  name: "GoodCard",
  components: {
    AddToCart,
    Heart,
  },
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.two-line-only {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.heart {
  position: absolute;
  top: -12px;
  right: -16px;
}
</style>
