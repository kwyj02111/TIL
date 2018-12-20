<template>
  <div id="app">
    <Header />
    <PostContainer />
  </div>
</template>

<script>

import Header from './components/Header/Header.vue'
import PostContainer from './components/PostContainer/PostContainer.vue'

export default {
  name: 'app',
  components: {
    Header,
    PostContainer,
  }
}
</script>

<style type="text/css" src="./assets/asset.css"></style>
<style>
  body {
    background: #e0e0e0;
  }
</style>