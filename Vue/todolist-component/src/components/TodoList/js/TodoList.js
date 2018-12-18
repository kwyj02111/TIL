import Item from '../../Item/Item.vue'

export default {
  components: {
      Item,
  },
  data(){
    return {
      addTodoName : '',
      todos: [
        {
          name:'책 읽기',
          done: false,
        },
        {
          name:'Vue 공부',
          done: false,
        },
        {
          name:'Angular 공부',
          done: false,
        },
        {
          name:'React 공부',
          done: false,
        }
      ]
    }
  },
  methods:{
    createTodo(name){
      if(name !== null){
        this.todos.push({
          name: name,
          done: false,
        });
        this.addTodoName = null;
      }
    },
    deleteTodoItem(index){
      this.todos.splice(index,1);
      return;
    },
  },
}