<template>
  <div id="app">
    <MoviesContainer />
  </div>
</template>

<script>

import MoviesContainer from './components/MoviesContainer/MoviesContainer.vue'

export default {
  name: 'app',
  components: {
    MoviesContainer,
  }
}
</script>

<style type="text/css" src="./assets/asset.css"></style>