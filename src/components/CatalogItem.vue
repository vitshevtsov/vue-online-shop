<template>
  <div class="catalog-item">
    <div class="catalog-item_img-wrapper">
      <img
        :src="product.pathToImg"
        alt="product image"
        class="catalog-item_img"
      />
      <icon-favourite
        class="catalog-item_img-icon"
        :isFav="product.isFavourite"
        @onClickFav="onClickFav"
      />
    </div>

    <b>{{ product.dish }}</b>
    <div class="catalog-item_description">{{ product.description }}</div>
    <p>price: {{ product.price }} $</p>

    <button
      class="catalog-item_button button"
      @click="onClickAddHandler"
      v-show="!itemInCart"
    >
      Add to cart
    </button>
    <quantity-input
      :value="valueForQuantity"
      @clickedMinusQuantity="clickedMinusQuantity"
      @clickedPlusQuantity="clickedPlusQuantity"
      v-if="itemInCart"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IconFavourite from "./IconFavourite.vue";
import QuantityInput from "./QuantityInput.vue";

export default {
  components: { QuantityInput, IconFavourite },
  props: {
    product: Object,
    itemInCart: Boolean,
  },
  computed: {
    ...mapGetters(["cart"]),
    valueForQuantity: function () {
      const cartItem = this.cart.find((item) => item.id === this.product.id);
      return cartItem ? cartItem.quantity : "";
    },
  },
  methods: {
    ...mapActions(["removeFromCart", "clickOnFav"]),
    onClickAddHandler() {
      this.$emit("clickedCatalogItem", this.product);
    },
    onClickFav() {
      this.clickOnFav(this.product.id);
    },
    clickedMinusQuantity() {
      const cartItem = this.cart.find((item) => item.id === this.product.id);
      if (cartItem && cartItem.quantity === 1) {
        this.removeFromCart(this.product.id);
      } else {
        this.$emit("clickedMinusQuantity", this.product);
      }
    },
    clickedPlusQuantity() {
      this.$emit("clickedPlusQuantity", this.product);
    },
  },
};
</script>

<style>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 4px 0 #c0c0c0;
  padding: calc(var(--padding) * 2);
  margin: calc(var(--margin) * 2);
}

.catalog-item_img-wrapper {
  position: relative;
  max-width: 200px;
  max-height: auto;
}

.catalog-item_img {
  max-width: 200px;
  max-height: auto;
  margin-bottom: var(--margin);
}

.catalog-item_img-icon {
  position: absolute;
  right: var(--padding);
  top: var(--padding);
}

.catalog-item_description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.4rem;
}

.icon {
  cursor: pointer;
}
</style>
