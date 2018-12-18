<template>
  <div id="app">
    <div class="container" id="container">
      <h2>TodoList</h2>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>