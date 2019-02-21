<template>
    <div class="movie-list-container">
        <i class="material-icons slide-pre-btn" v-if="movieIdx > 0" v-on:click="preMovie">chevron_left</i>

        <div class="movie-item-wrap" ref="movieItemWrap">
            <transition-group :name="direction">
                <ul class="movie-item-container" :key="movieIdx" :style="{right : left + 'px'}">
                    <li v-for="(item, idx) in list" class="movie-item" :style="{width : containerWidth + 'px'}" :key="idx">
                        <div class="movie-item-poster-wrap">
                            <img v-bind:src="item.poster" class="movie-item-poster"/>
                        </div>

                        <div class="movie-item-name">
                            {{item.name}}
                        </div>
                    </li>
                </ul>
            </transition-group>
        </div>

        <i class="material-icons slide-next-btn" v-if="movieIdx < movieCount-1" v-on:click="nextMovie">chevron_right</i>
    </div>
</template>

<script type="text/javascript" src="./js/MoviesList.js"></script>
<style type="text/css" src="./css/MoviesList.css"></style>