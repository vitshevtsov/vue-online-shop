<template>
  <div class="shop-wrapper">
    <nav class="shop-nav">
      <router-link to="/">Catalog</router-link>
      <router-link to="/cart">Cart: {{ cart.length }}</router-link>
    </nav>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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

<style scoped>
.shop-wrapper {
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
  /* align-items: center; */
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid gray;
}

.shop-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin: var(--margin); */
  padding: var(--padding);
  position: sticky;
  top: 0;
  background-color: #fafafa;
}

.shop-nav a {
  text-decoration: none;
  font-weight: bold;
  border-bottom: 4px solid #b9c3ce;
  padding: calc(var(--padding) * 2) 0;
  margin: calc(var(--margin) * 2);
  /* min-width: 40px; */
}
</style>
