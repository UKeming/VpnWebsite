<template>
  <div class="container">
    <MainBody :login="this.login" :username="this.username"/>
    <Selector v-if="login" />
    <Footer />
  </div>
</template>

<script>
import MainBody from "./MainBody.vue";
import Selector from "./Selector.vue";
import Footer from "./Footer.vue";
import checkAuth from "../auth-check.js";
export default {
  name: "Home",
  data() {
    return {
      login: false,
      username: "",
    };
  },
  components: {
    MainBody,
    Selector,
    Footer,
  },
  methods: {
    checkAuthAndSetView() {
      checkAuth().then((data) => {
        console.log(data)
        if (data != null) {
          this.login = true;
          this.username = data.username;
        }
      });
    },
  },
  beforeMount() {
    this.checkAuthAndSetView();
  },
};
</script>

<style>
#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
}
</style>
