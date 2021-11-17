<template>
  <div class="favourites">
    <catalog-item
      v-for="product in favProducts"
      :key="product.id"
      :product="product"
      :itemInCart="cart.find((item) => item.id === product.id) ? true : false"
      @clickedCatalogItem="clickedCatalogItem"
      @clickedMinusQuantity="clickedMinusQuantity"
      @clickedPlusQuantity="clickedPlusQuantity"
    />
    <div class="favourites--empty" v-if="!favProducts.length">
      <p>You don't save products in favourites yet</p>
      <router-link to="/">
        <button class="button">Let's find something!</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Favourites",
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters(["products", "favProducts", "cart"]),
  },
  methods: {
    ...mapActions(["addToCart", "decrementCartItem", "incrementCartItem"]),
    clickedCatalogItem(product) {
      this.addToCart(product);
    },
    clickedMinusQuantity(product) {
      this.decrementCartItem(product.id);
    },
    clickedPlusQuantity(product) {
      this.incrementCartItem(product.id);
    },
  },
};
</script>

<style>
.favourites {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.favourites--empty {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
