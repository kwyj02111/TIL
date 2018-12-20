export default {
  props : ['postId'],
  methods:{
    navigateClick(type){
      if(type !== 'prev' && type !== 'next'){
        return;
      }

      if(type === 'prev' && this.postId === 1){
        return;
      }

      this.$emit('navigateClick', type);
      return;
    },
  },
}