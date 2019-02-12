<template>
    <ul class="movie-list-container">
        <li v-for="item in list" class="movie-item">
            <div class="movie-item-poster-wrap">
                <img v-bind:src="item.poster" class="movie-item-poster"/>
            </div>

            <div class="movie-item-name">
                {{item.name}}
            </div>
        </li>
    </ul>
</template>

<script type="text/javascript" src="./js/MoviesList.js"></script>
<style type="text/css" src="./css/MoviesList.css"></style>