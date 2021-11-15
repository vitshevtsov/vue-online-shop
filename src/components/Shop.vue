<template>
  <div class="shop-wrapper">
    <catalog />
    <cart v-if="cart.length" />
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "Shop",
  components: {
    Catalog,
    Cart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {},
};
</script>

<style scoped>
.shop-wrapper {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid gray;
}
</style>
