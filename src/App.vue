<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="50" height="50">
    <Alumnos />
  </div>
</template>

<script>
import Alumnos from './components/Alumnos.vue'

export default {
  name: 'App',
  components: {
    Alumnos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
