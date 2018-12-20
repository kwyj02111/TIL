<template>
  <div class="navigate">
    <button class="navigate-left-btn" @click="navigateClick('prev')">
      <i class="material-icons navigate-btn-icon">keyboard_arrow_left</i>
    </button>

    <div class="navigate-page-num">
        {{postId}}
    </div>

    <button class="navigate-right-btn" @click="navigateClick('next')">
      <i class="material-icons navigate-btn-icon">keyboard_arrow_right</i>
    </button>

  </div>
</template>

<script type="text/javascript" src="./js/Navigate.js"></script>
<style type="text/css" src="./css/Navigate.css"></style>