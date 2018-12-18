export default {
  props : ['todo', 'index'],
  methods:{
    deleteTodo(index){
      this.$emit('deleteTodo', index);
      return;
    },
  },
}
