<template>
  <div class="cart-item">
    <img :src="product.pathToImg" alt="product image" class="cart-item_img" />
    <div class="cart-item_text">
      <b class="cart-item_title">{{ product.dish }}</b>
      <div class="cart-item_description">{{ product.description }}</div>
      <p>price: {{ product.price }} $</p>
      <quantity-input
        :value="product.quantity"
        @clickedMinusQuantity="clickedMinusQuantity"
        @clickedPlusQuantity="clickedPlusQuantity"
      />
    </div>
    <button class="cart-item_button button" @click="onRemoveClick">
      Remove from cart
    </button>
  </div>
</template>

<script>
import QuantityInput from "./QuantityInput.vue";
export default {
  components: { QuantityInput },
  props: {
    product: Object,
    price: Number,
    imgPath: String,
  },
  methods: {
    onRemoveClick() {
      this.$emit("clickedRemoveItem", this.product);
    },
    clickedMinusQuantity() {
      this.$emit("clickedMinusQuantity", this.product);
    },
    clickedPlusQuantity() {
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
  box-shadow: 0 0 4px 0 #c0c0c0;
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
</style>
