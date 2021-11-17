<template>
  <b-container id="app">
    <nav-bar></nav-bar>

    <div class="mt-3">
      <router-view />
    </div>
  </b-container>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
