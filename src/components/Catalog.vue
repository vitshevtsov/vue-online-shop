<template>
  <div class="catalog">
    <catalog-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :price="prices[products.indexOf(product)]"
      :imgPath="arrayOfImgs[products.indexOf(product)]"
      @clickedCatalogItem="clickedCatalogItem"
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
    this.getProductsAndPrice().then((response) => {
      if (response.products) {
        console.log("we are get our products");
      }
    });
  },
  computed: {
    ...mapGetters(["products", "prices", "arrayOfImgs"]),
  },
  methods: {
    ...mapActions(["getProductsAndPrice", "addToCart"]),
    clickedCatalogItem(product) {
      this.addToCart(product);
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
