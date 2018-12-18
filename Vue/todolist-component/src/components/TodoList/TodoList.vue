<template>
  <div>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="할일을 입력하세요"
        v-model="addTodoName"
        v-on:keyup.enter="createTodo(addTodoName)"
      />
      <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          @click="createTodo(addTodoName)"
        >
          추가
        </button>
      </span>
    </div>


    <ul class="list-group">
      <Item v-for="(todo, index) in todos" :todo="todo" :index="index" :key="index" v-on:deleteTodo="deleteTodoItem"></Item>
    </ul>

  </div>
</template>

<script type="text/javascript" src="./js/TodoList.js"></script>
<style type="text/css" src="./css/TodoList.css"></style>