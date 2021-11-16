<template>
  <div class="cart">
    <div class="cart--empty" v-if="!cart.length">
      <p>Cart is empty</p>
      <router-link to="/">
        <button class="button">Start shopping</button>
      </router-link>
    </div>
    <cart-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
      @clickedRemoveItem="clickedRemoveItem"
      @clickedMinusQuantity="clickedMinusQuantity"
      @clickedPlusQuantity="clickedPlusQuantity"
    />
    <div class="cart-total" v-if="cart.length">Total: {{ totalSum }}</div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(["products", "cart", "totalSum"]),
  },
  methods: {
    ...mapActions(["removeFromCart", "incrementCartItem", "decrementCartItem"]),
    clickedRemoveItem(product) {
      this.removeFromCart(product.id);
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
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart--empty {
  margin: auto;
}
</style>
