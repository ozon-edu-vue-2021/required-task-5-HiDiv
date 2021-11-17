<template>
  <b-card align="left">
    <b-card-header>
      <b-button variant="success" block :disabled="receiptItems.length === 0" @click="buy">Оформить заказ</b-button>
    </b-card-header>

    <b-card-text class="mt-2 pb-2 font-weight-bold border-bottom">Ваша корзина:</b-card-text>
    <b-card-text v-for="item of receiptItems" :key="item.uid" class="border-bottom">
      <div class="text-left">{{ item.title }}</div>
      <div class="text-right small">
        {{ item.price }}&nbsp;руб.&nbsp;x&nbsp;{{ item.count }}&nbsp;=&nbsp;{{ item.total }}&nbsp;руб.
      </div>
    </b-card-text>

    <b-card-text class="mt-2 d-flex flex-nowrap justify-content-between">
      <span class="font-weight-bold">Общая стоимость:</span>
      <span>{{ totalPrice }}&nbsp;руб.</span>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "Receipt",
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
    buy() {
      const goods = this.receiptItems.map((item) => ({
        title: item.title,
        count: item.count,
        sum: item.total,
      }));
      alert(JSON.stringify(goods));
    },
  },
  computed: {
    receiptItems() {
      return this.cartGoods
        .filter((item) => this.selected.indexOf(item.uid) >= 0 && item.count > 0)
        .map((item) => ({
          uid: item.uid,
          title: item.title,
          price: item.price,
          count: item.count,
          total: (+item.count * +item.price).toFixed(2),
        }));
    },
    totalPrice() {
      return this.receiptItems.reduce((sum, item) => +(+sum + +item.total).toFixed(2), 0);
    },
  },
};
</script>

<style scoped></style>
