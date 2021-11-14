<template>
  <div class="catalog">
    <catalog-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :price="price[products.indexOf(product)]"
      :imgPath="arrayOfImgs[products.indexOf(product)]"
      @clickedItem="clickedItem"
    />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
  name: "Catalog",
  components: {
    CatalogItem,
  },
  props: {
    products: Array,
    price: Array,
    arrayOfImgs: Array,
  },
  methods: {
    clickedItem(id) {
      this.$emit("clickedItem", id);
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
