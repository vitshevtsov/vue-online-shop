<template>
  <div class="cart">
    <h2>Cart</h2>
    <cart-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
      :price="prices[products.indexOf(product)]"
      :imgPath="arrayOfImgs[products.indexOf(product)]"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(["products", "prices", "arrayOfImgs", "cart"]),
  },
};
</script>

<style></style>
