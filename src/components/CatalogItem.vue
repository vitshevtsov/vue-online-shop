<template>
  <div class="catalog-item">
    <img
      :src="product.pathToImg"
      alt="product image"
      class="catalog-item_img"
    />
    <b>{{ product.dish }}</b>
    <div class="catalog-item_description">{{ product.description }}</div>
    <p>price: {{ product.price }} $</p>

    <button class="catalog-item_button button" @click="onClickHandler">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    onClickHandler() {
      this.$emit("clickedCatalogItem", this.product);
    },
  },
};
</script>

<style>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: calc(var(--padding) * 2);
  margin: calc(var(--margin) * 2);
}

.catalog-item_img {
  max-width: 200px;
  max-height: auto;
}

.catalog-item_description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.4rem;
}
</style>
