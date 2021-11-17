<template>
  <div class="quantity">
    <div class="quantity__input-wrapper">
      <button type="button" @click="onMinusClick" class="quantity__minus">
        -
      </button>
      <!-- Инпут сейчас readonly, если нужна будет функциональность
      ввода значения - нужно поднять событие инпута наверх -->
      <input
        type="number"
        min="0"
        readonly
        class="quantity__input"
        :value="value"
      />
      <button type="button" @click="onPlusClick" class="quantity__plus">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  methods: {
    onMinusClick() {
      this.$emit("clickedMinusQuantity", this.product);
    },
    onPlusClick() {
      this.$emit("clickedPlusQuantity", this.product);
    },
  },
};
</script>

<style>
.quantity {
  max-width: 90px;
}

.quantity__input-wrapper {
  position: relative;
}

.quantity__minus {
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 26px;
  text-align: center;
  border: none;
  background: none;
  font-size: 24px;
  line-height: 26px;
  color: #2c3e50;
  cursor: pointer;
}

.quantity__minus:hover,
.quantity__minus:focus {
  opacity: 0.65;
}

.quantity__input {
  height: auto;
  width: 100%;
  border: 2px solid #b9c3ce;
  background: none;
  text-align: center;
  font-weight: 300;
  line-height: 26px;
  color: #2c3e50;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}

.quantity__input::-webkit-outer-spin-button,
.quantity__input::-webkit-inner-spin-button {
  display: none;
}

.quantity__plus {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 26px;
  text-align: center;
  border: none;
  background: none;
  font-size: 24px;
  line-height: 26px;
  color: #2c3e50;
  cursor: pointer;
}

.quantity__plus:hover,
.quantity__plus:focus {
  opacity: 0.65;
}
</style>
