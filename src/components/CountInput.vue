<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-button variant="outline-secondary" :disabled="value < 2" @click="onMinusClick">-</b-button>
    </b-input-group-prepend>

    <b-form-input
      :value="value"
      trim
      :state="state"
      @input="validate"
      placeholder="Количество"
      class="text-center"
    ></b-form-input>

    <b-input-group-append>
      <b-button variant="outline-secondary" @click="onPlusClick">+</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: "CountInput",
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    validate(rawValue) {
      const value = +rawValue;
      this.$emit("input", isFinite(value) && Math.floor(value) === Math.ceil(value) && value >= 0 ? value : null);
    },
    onMinusClick() {
      if (this.value >= 1) {
        this.$emit("input", +this.value - 1);
      }
    },
    onPlusClick() {
      this.$emit("input", +this.value + 1);
    },
  },
  computed: {
    state() {
      return this.value !== null && this.value >= 0 ? null : false;
    },
  },
};
</script>
