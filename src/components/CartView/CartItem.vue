<template>
  <b-list-group-item class="cart-list-item_container">
    <b-form-checkbox :checked="selected" inline @change="changeSelect" class="cart-list-item_select"></b-form-checkbox>

    <div class="cart-list-item_image">
      <b-img :src="require('@/assets/images/' + cartGood.image + '.webp')" fluid></b-img>
    </div>

    <div class="cart-list-item_good-body">
      <div class="cart-list-item_good-body-title">{{ cartGood.title }}</div>
      <div>
        <b-button
          variant="link"
          size="sm"
          :disabled="cartGood.favorite"
          @click="toFavorite"
          class="text-success cart-list-item_to-favorite"
        >В избранное</b-button>

        <b-button
          variant="link"
          size="sm"
          @click="onDelete"
          class="text-danger cart-list-item_delete"
        >Удалить</b-button>
      </div>
    </div>

    <div class="cart-list-item_good-price">{{ cartGood.price }} руб.</div>

    <count-input :value="cartGood.count" @input="changeCount" class="cart-list-item_count"></count-input>
  </b-list-group-item>
</template>

<script>
import CountInput from "@/components/CountInput.vue";

export default {
  name: "CartItem",
  components: {
    CountInput,
  },
  props: {
    selected: {
      type: Boolean,
      required: true,
    },
    // Описание товара с количеством (набор данных для корзины)
    cartGood: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeSelect(newValue) {
      this.$emit("change-selected", newValue);
    },

    onDelete() {
      // Снимем отметку, если товар был выбран
      if (this.selected) {
        this.$emit("change-selected", false);
      }

      this.$store.commit("delGoodFromCart", this.cartGood.uid);
    },

    toFavorite() {
      this.$store.commit("setFavorite", { uid: this.cartGood.uid, favorite: true });
    },

    changeCount(newValue) {
      this.$store.commit("setCountGoodInCart", { uid: this.cartGood.uid, count: newValue });
    },
  },
};
</script>

<style scoped>
.cart-list-item_container {
  display: flex;
  align-items: center;
  height: 124px;
}
.cart-list-item_select {
}
.cart-list-item_image {
  width: 124px;
  max-height: 100%;
  overflow: hidden;
  margin-right: 16px;
}
.cart-list-item_good-body {
  align-self: start;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-list-item_to-favorite {
  padding-left: 0;
  padding-bottom: 0;
}
.cart-list-item_delete {
  padding-bottom: 0;
}
.cart-list-item_good-price {
  white-space: nowrap;
  text-align: right;
  padding: 0 16px;
  font-weight: bold;
  flex-shrink: 0;
}
.cart-list-item_count {
  width: 132px;
  flex-wrap: nowrap;
  flex-shrink: 0;
}
</style>
