<template>
  <div class="container">
    <Header title="Keming VPN" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  position: absolute;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
  width: 100%;
}
.button:hover {
  color: white;
  transition: 0.3s ease-in-out;
}
.button {
  text-decoration: none;
  background-color: whitesmoke;
  padding: 1vw;
  display: inline-block;
  border-radius: 1vw;
  color: grey;
}
body{
    margin: 0;
}
</style>
