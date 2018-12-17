export default {
  data(){
    return {
      addTodoName : '',
      todos: [
        {
          name:'책 읽기',
          done: false,
        },{
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
    deleteTodo(i){
      this.todos.splice(i,1);
    },
    createTodo(name){
      if(name !== null){
        this.todo.push({name: name});
        this.name = null;
      }
    },
  },
}