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
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-right: calc(-1 * (100vw - 100%));
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
