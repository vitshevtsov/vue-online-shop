<template>
  <div class="catalog">
    <catalog-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :itemInCart="!!cart.find((item) => item.id === product.id)"
      @clickedCatalogItem="clickedCatalogItem"
      @clickedMinusQuantity="clickedMinusQuantity"
      @clickedPlusQuantity="clickedPlusQuantity"
    />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    CatalogItem,
  },
  mounted() {
    this.getProductsAndPrice();
  },
  computed: {
    ...mapGetters(["products", "cart"]),
  },
  methods: {
    ...mapActions([
      "getProductsAndPrice",
      "addToCart",
      "decrementCartItem",
      "incrementCartItem",
    ]),
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
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
