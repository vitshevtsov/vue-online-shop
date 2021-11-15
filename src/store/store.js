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
    price: [],
    arrayOfImgs,
    cart: [],
  },
  mutations: {
    setProductsAndPrice(state, { products, price }) {
      state.products = products;
      state.price = price;
    },
    setCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    // todo try catch
    // получаем инфу о продуктах
    async getProductsAndPrice({ commit }) {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=12"
      );
      const products = await response.json();

      // имитируем получение цены
      const price = [];
      while (price.length !== 12) {
        price.push(Math.floor(Math.random() * (200 - 1) + 1));
      }
      commit("setProductsAndPrice", { products, price });
      //   возвращаем на случай использования в компонентах при обработке ошибок
      return { products, price };
    },
    addToCart({ commit }, product) {
      console.log(`in actions: ${product}`);
      commit("setCart", product);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    prices(state) {
      return state.price;
    },
    arrayOfImgs(state) {
      return state.arrayOfImgs;
    },
    cart(state) {
      return state.cart;
    },
  },
});

export default store;
