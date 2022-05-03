<template>
  <div class="container">
    <MainBody />
    <Selector />
    <Footer/>
  </div>
</template>

<script>
import MainBody from './MainBody.vue'
import Selector from './Selector.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    MainBody,
    Selector,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
}
</style>
