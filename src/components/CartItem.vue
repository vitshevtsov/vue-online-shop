<template>
  <div class="cart-item">
    <img :src="product.pathToImg" alt="product image" class="cart-item_img" />
    <div class="cart-item_text">
      <b class="cart-item_title">{{ product.dish }}</b>
      <div class="cart-item_description">{{ product.description }}</div>
      <p>price: {{ product.price }} $</p>
      <p>quantity: {{ product.quantity }}</p>

      <!-- start quantity, need refactoring -->
      <div class="quantity">
        <h4 class="quantity__title">Quantity:</h4>
        <div class="quantity__input-wrapper">
          <button type="button" @click="onMinusClick" class="quantity__minus">
            -
          </button>
          <input
            type="number"
            min="0"
            :value="product.quantity"
            readonly
            class="quantity__input"
          />
          <button type="button" @click="onPlusClick" class="quantity__plus">
            +
          </button>
        </div>
      </div>
      <!-- end quantity -->
    </div>
    <button class="cart-item_button button" @click="onRemoveClick">
      Remove from cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    price: Number,
    imgPath: String,
  },
  methods: {
    onRemoveClick() {
      this.$emit("clickedRemoveItem", this.product);
    },
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
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  column-gap: 20px;
  align-items: center;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: calc(var(--padding) * 2);
  margin: calc(var(--margin) * 2);
}

.cart-item_img {
  max-width: 150px;
  max-height: auto;
}

.cart-item_text {
  flex-basis: 50%;
}

.cart-item_description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.4rem;
}

.quantity {
  max-width: 90px;
}

.quantity__title {
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
}

.quantity__plus:hover,
.quantity__plus:focus {
  opacity: 0.65;
}
</style>
