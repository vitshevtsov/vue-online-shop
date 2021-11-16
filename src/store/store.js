import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Получаем массив путей к изображениям товаров, сохраняем его в state
// 2й аргумент context (boolean) - нужно ли рекурсивно просматривать всю папку
const reqImgs = require.context("../assets/images", false, /\.webp$/);
const pathToImgs = reqImgs.keys();
const arrayOfImgs = pathToImgs.map((path) => reqImgs(path));

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
  },
  actions: {
    // todo try catch
    // получаем инфу о продуктах
    async getProductsAndPrice({ commit }) {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=12"
      );
      const productsFromApi = await response.json();

      // добавляем свойства (цена, путь к картинке, признак избранного товара)
      const products = productsFromApi.map((product) => {
        product.price = Math.floor(Math.random() * (200 - 1) + 1);
        product.pathToImg = arrayOfImgs[productsFromApi.indexOf(product)];
        product.isFavorite = false;
        return product;
      });
      commit("setProductsAndPrice", products);
      //   возвращаем на случай использования в компонентах при обработке ошибок
      return products;
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
      if (cartItem.quantity > 1) {
        commit("decrementQuantity", cartItem);
      }
    },
  },
  getters: {
    products(state) {
      return state.products;
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
