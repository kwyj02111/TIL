<template>
  <li class="list-group-item">
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
</template>

<script type="text/javascript" src="./js/Item.js"></script>
<style type="text/css" src="./css/Item.css"></style>