<template>
  <ul class="comment">
    <li class="comment-item" v-for="(comment, index) in commentList" :key="index">
        <p>
          <b class="comment-item-name">{{comment.email.split('@')[0]}}</b>
          {{comment.body}}
        </p>
    </li>
  </ul>
</template>

<script type="text/javascript" src="./js/Comment.js"></script>
<style type="text/css" src="./css/Comment.css"></style>