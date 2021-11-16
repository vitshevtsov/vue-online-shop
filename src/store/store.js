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
    spliceFromCart(state, cartItem) {
      state.cart.splice(state.cart.indexOf(cartItem), 1);
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
      commit("spliceFromCart", cartItem);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state) {
      return state.cart;
    },
  },
});

export default store;
