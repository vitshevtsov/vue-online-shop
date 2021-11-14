<template>
  <div id="app">
    <shop />
  </div>
</template>

<script>
import Shop from "./components/Shop.vue";

export default {
  name: "App",
  components: {
    Shop,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
