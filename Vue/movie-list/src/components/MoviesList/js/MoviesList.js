export default {
    props : ['list'],
    data(){
        return {
            containerWidth : 0,
            movieIdx : 0,
            movieCount : 0,
            direction : 'slide-right',
            left : 0,
        }
    },
    methods:{
        setMovieNum(){
            this.movieCount = this.list.length;
            return;
        },
        setContainerWidth() {
            let width = this.$refs.movieItemWrap.clientWidth;
            this.containerWidth = width;
            this.left = this.containerWidth * this.movieIdx;
            return;
        },
        preMovie(){
            this.direction = 'slide-left';
            this.movieIdx -= 1;
            this.left = this.containerWidth * this.movieIdx;
            return;
        },
        nextMovie(){
            this.direction = 'slide-right';
            this.movieIdx += 1;
            this.left = this.containerWidth * this.movieIdx;
            return;
        },
    },
    created() {
        this.setMovieNum();
        return;
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.setContainerWidth);
            this.setContainerWidth();
        });
    },
}