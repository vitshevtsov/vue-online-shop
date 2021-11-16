<template>
  <div class="cart">
    <h2>Cart</h2>
    <cart-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
      @clickedCartItem="clickedCartItem"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(["products", "cart"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    clickedCartItem(product) {
      this.removeFromCart(product.id);
    },
  },
};
</script>

<style></style>
