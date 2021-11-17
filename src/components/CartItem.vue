<template>
  <div class="cart-item">
    <img :src="product.pathToImg" alt="product image" class="cart-item_img" />
    <div class="cart-item_text">
      <b class="cart-item_title">{{ product.dish }}</b>
      <div class="cart-item_description">{{ product.description }}</div>
      <p>price: {{ product.price }} $</p>
      <div class="cart-item_quantity-and-icon-wrapper">
        <quantity-input
          :value="product.quantity"
          @clickedMinusQuantity="clickedMinusQuantity"
          @clickedPlusQuantity="clickedPlusQuantity"
        />
        <icon-favourite :isFav="isFavourite" @onClickFav="onClickFav" />
      </div>
    </div>
    <button class="cart-item_button button" @click="onRemoveClick">
      Remove from cart
    </button>
  </div>
</template>

<script>
import IconFavourite from "./IconFavourite.vue";
import QuantityInput from "./QuantityInput.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { QuantityInput, IconFavourite },
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters(["products", "cart"]),
    isFavourite: function () {
      const productItem = this.products.find(
        (item) => item.id === this.product.id
      );
      return productItem.isFavourite;
    },
  },
  methods: {
    ...mapActions(["clickOnFav"]),
    onRemoveClick() {
      this.$emit("clickedRemoveItem", this.product);
    },
    clickedMinusQuantity() {
      this.$emit("clickedMinusQuantity", this.product);
    },
    clickedPlusQuantity() {
      this.$emit("clickedPlusQuantity", this.product);
    },
    onClickFav() {
      this.clickOnFav(this.product.id);
    },
  },
};
</script>

<style>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  column-gap: 5px;
  align-items: center;
  box-shadow: 0 0 4px 0 #c0c0c0;
  padding: calc(var(--padding) * 2);
  margin: calc(var(--margin) * 2);
  font-size: 0.85rem;
}

.cart-item_img {
  max-width: 100px;
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

.cart-item_quantity-and-icon-wrapper {
  display: flex;
  column-gap: 20px;
}

.cart-item_button.cart-item_button {
  background-color: #f91155;
}

.cart-item_button.cart-item_button:hover,
.cart-item_button.cart-item_button:focus {
  background-image: none;
  opacity: 0.85;
}
</style>
