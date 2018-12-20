import Navigate from '../../Navigate/Navigate.vue'
import Post from '../../Post/Post.vue'
import Comment from '../../Comment/Comment.vue'
import axios from 'axios'

export default {
  components: {
      Navigate,
      Post,
      Comment,
  },
  data(){
    return {
      postId : 1,
      postContent : {},
      commentList : [],
    }
  },
  methods:{
    getPostContent(id){

      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {

          let contents = {
            body : response.data.body,
            title : response.data.title
          }

          this.postId = id;
          this.postContent = contents;
          return;
        })
        .catch((error) => {
          alert(error);
        });

      return;
    },
    getComment(id){

      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {

          this.postId = id;
          this.commentList = response.data;
          return;
        })
        .catch((error) => {
          alert(error);
        });

      return;
    },
    navigateClick(type){

      if(type === 'next') {
          this.getPostContent(this.postId+1);
          this.getComment(this.postId+1);
      } else {
          this.getPostContent(this.postId-1);
          this.getComment(this.postId-1);
      }
    }
  },
  created() {
    this.getPostContent(this.postId);
    this.getComment(this.postId);
    return;
  }
}