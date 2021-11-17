<template>
  <div class="shop-wrapper">
    <nav class="shop-nav">
      <router-link to="/">Catalog</router-link>
      <router-link to="/favourites">Favourites</router-link>

      <router-link to="/cart"
        >Cart:
        <span :class="{ cartNotEmpty: cart.length }">{{
          cart.length
        }}</span></router-link
      >
    </nav>
    <div>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Shop",
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<style>
.shop-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: calc(var(--padding) * 2);
  border: 1px solid #b9c3ce;
  border-top: none;
}

.shop-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: var(--padding);
  position: sticky;
  top: 0;
  background-color: #fafafa;
  z-index: 2;
}

.shop-nav a {
  text-decoration: none;
  font-weight: bold;
  border-bottom: 4px solid #b9c3ce;
  padding: calc(var(--padding) * 2) 0;
  margin: calc(var(--margin) * 2);
}

.cartNotEmpty {
  display: inline-block;
  min-width: 20px;
  color: #fafafa;
  background-color: #f91155;
  border-radius: var(--radius);
  text-align: center;
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.router-link-exact-active.router-link-exact-active {
  color: var(--primary);
  border-bottom: 4px solid var(--secondary);
}
</style>
