<template>
  <div class="shop-wrapper">
    <catalog
      :products="products"
      :price="price"
      :arrayOfImgs="arrayOfImgs"
      @clickedItem="clickedItem"
    />
    <cart />
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";

// Получаем массив путей к изображениям товаров, сохраняем его в data
// 2й аргумент context (boolean) - нужно ли рекурсивно просматривать всю папку
const reqImgs = require.context("../assets/images", false, /\.webp$/);
const pathToImgs = reqImgs.keys();
const arrayOfImgs = pathToImgs.map((path) => reqImgs(path));

export default {
  name: "Shop",
  components: {
    Catalog,
    Cart,
  },
  data() {
    return {
      products: [],
      price: [],
      arrayOfImgs,
    };
  },
  async created() {
    const response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=12"
    );
    const products = await response.json();
    this.products = products;

    while (this.price.length !== 30) {
      this.price.push(Math.floor(Math.random() * (200 - 1) + 1));
    }
  },
  methods: {
    clickedItem(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.shop-wrapper {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid gray;
}
</style>
