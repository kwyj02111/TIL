<template>
  <div class="post-container">
    <Navigate v-on:navigateClick="navigateClick" :postId="postId"/>
    <div class="post-content-container">
      <Post :postContent="postContent" />
      <Comment :commentList="commentList" />
    </div>
  </div>
</template>

<script type="text/javascript" src="./js/PostContainer.js"></script>
<style type="text/css" src="./css/PostContainer.css"></style>