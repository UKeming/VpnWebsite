<template>
  <div class="container">
    <Header title="Keming VPN" />
    <MainBody />
    <Selector />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainBody from './components/MainBody.vue'
import Selector from './components/Selector.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
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
}
</style>
