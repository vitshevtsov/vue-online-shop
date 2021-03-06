import Vue from "vue";
import Vuex from "vuex";
import { getImages } from "../helpers/getImages.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },

  mutations: {
    setProductsAndPrice(state, products) {
      state.products = products;
    },
    pushToCart(state, productToCart) {
      state.cart.push(productToCart);
    },
    spliceFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    incrementQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementQuantity(state, cartItem) {
      cartItem.quantity--;
    },
    addToFav(state, productItem) {
      productItem.isFavourite = true;
    },
    removeFromFav(state, productItem) {
      productItem.isFavourite = false;
    },
  },

  actions: {
    async getProductsAndPrice({ commit }) {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=12"
      );
      const productsFromApi = await response.json();
      const products = productsFromApi.map((product) => {
        product.price = Math.floor(Math.random() * (200 - 1) + 1);
        product.pathToImg = getImages(productsFromApi.indexOf(product));
        product.isFavourite = false;
        return product;
      });
      commit("setProductsAndPrice", products);
    },

    addToCart({ commit }, product) {
      const cartItem = this.state.cart.find((item) => item.id === product.id);
      if (!cartItem) {
        commit("pushToCart", { ...product, quantity: 1 });
      }
    },

    removeFromCart({ commit }, id) {
      const cartItem = this.state.cart.find((item) => item.id === id);
      const index = this.state.cart.indexOf(cartItem);
      commit("spliceFromCart", index);
    },

    incrementCartItem({ commit }, id) {
      const cartItem = this.state.cart.find((item) => item.id === id);
      commit("incrementQuantity", cartItem);
    },

    decrementCartItem({ commit }, id) {
      const cartItem = this.state.cart.find((item) => item.id === id);
      commit("decrementQuantity", cartItem);
    },

    clickOnFav({ commit }, id) {
      const productItem = this.state.products.find((item) => item.id === id);
      if (productItem.isFavourite) {
        commit("removeFromFav", productItem);
      } else {
        commit("addToFav", productItem);
      }
    },
  },

  getters: {
    products(state) {
      return state.products;
    },
    favProducts(state) {
      return state.products.filter((item) => item.isFavourite === true);
    },
    cart(state) {
      return state.cart;
    },
    totalSum(state) {
      return state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export default store;
