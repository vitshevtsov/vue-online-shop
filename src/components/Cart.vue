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
    <div class="cart-total-checkout" v-if="cart.length">
      <b class="cart-total">Total: {{ totalSum }}</b>
      <button class="cart-checkout-button button" @click="onClickCheckout">
        Checkout
      </button>
    </div>
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
    // в корзине не даем уменьшить кол-во до 0 - для удаления отдельная кнопка
    clickedMinusQuantity(product) {
      if (product.quantity > 1) {
        this.decrementCartItem(product.id);
      }
    },
    clickedPlusQuantity(product) {
      this.incrementCartItem(product.id);
    },
    onClickCheckout() {
      let shoppingList = `Your shopping list for today:\n\n`;
      this.cart.forEach((item) => {
        shoppingList += `${item.dish} - ${item.price} $ (quantity: ${item.quantity})\n`;
      });
      shoppingList += `\nTOTAL: ${this.totalSum} $`;
      alert(shoppingList);
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

.cart-total-checkout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: calc(var(--margin) * 2);
}

.cart-checkout-button.cart-checkout-button {
  padding: calc(var(--padding) * 1.5) calc(var(--padding) * 3);
  background-color: var(--secondary);
  font-size: 1.2rem;
}

.cart-checkout-button.cart-checkout-button:hover,
.cart-checkout-button.cart-checkout-button:focus {
  background-image: none;
  opacity: 0.65;
}
</style>
