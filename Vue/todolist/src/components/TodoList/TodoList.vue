<template>
  <div class="container" id="container">
    <h2>TodoList</h2>
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
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
        {{todo.name}}
        <div class="btn-group pull-right">
          <button
            type="button"
            class="btn-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            더보기
            <span class="caret"></span>
          </button>

          <ul class="dropdown-menu">
            <li>
              <a
                href="#"
                @click="deleteTodo(index)"
              >
              삭제
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

  </div>
</template>

<script type="text/javascript" src="./js/TodoList.js"></script>
<style type="text/css" src="./css/TodoList.css"></style>