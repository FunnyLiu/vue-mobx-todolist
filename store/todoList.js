import { decorate, observable, action, computed } from "mobx";
import { TodoStore } from "./todo";

export default class TodoList {
  constructor() {
    this.todos = [];
    this.filter = "";
    this.editing = null;
    this.visibleTodos = [];
  }

  get activeCount() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get itemsLeft(){
    return ` item${this.activeCount !== 1 ? 's' : ''} left`;
  }

  get noTodosClass() {
    return this.todos.length === 0 ? "hidden" : "";
  }

  get hasTodosClass() {
    return this.todos.filter(({ completed }) => completed).length !== 0 ? '' : 'hidden';
  }

  get isToggled() {
    return this.todos.every(({ completed }) => completed);
  }

  setVisibleTodos() {
    let visibleTodos = this.todos;
    if (this.filter === "active") {
      visibleTodos = this.todos.filter(({ completed }) => completed === false);
    }

    if (this.filter === "completed") {
      visibleTodos = this.todos.filter(({ completed }) => completed);
    }
    visibleTodos.forEach(todo => {
      if (todo.id === this.isEditing) {
        todo.isEditing = true;
      } else {
        todo.isEditing = false;
      }
      todo.isEditing = todo.id === this.editing;
    });
    this.visibleTodos = visibleTodos;
  }

  addTodo(text) {
    this.todos.push(new TodoStore(text));
    this.setVisibleTodos();
  }

  setEditing(id) {
    this.editing = id;
    this.setVisibleTodos();
  }

  setFilter(filter) {
    this.filter = filter;
    this.setVisibleTodos();
  }

  toggleAll(checked) {
    this.todos = this.todos.map(todo => ({ ...todo, completed: checked }));
    this.setVisibleTodos();
  }

  toggleOne(id) {
    this.editing = null;
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }

  edit(id, text) {
    this.editing = null;
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.text = text;
        todo.isEditing = !todo.isEditing;
      }
    });
  }

  destroy(id) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setVisibleTodos();
  }

  clearCompleted () {
    this.todos = this.todos.filter(({ completed }) => !completed);
    this.setVisibleTodos();
  }
}

const TodoListStore = decorate(TodoList, {
  todos: observable,
  filter: observable,
  editing: observable,
  visibleTodos: observable,
  activeCount: computed,
  itemsLeft: computed,
  noTodosClass: computed,
  hasTodosClass: computed,
  isToggled: computed,
  setVisibleTodos: action,
  addTodo: action,
  setEditing: action,
  setFilter: action,
  toggleAll: action,
  toggleOne: action,
  edit: action,
  destroy: action
});

export const store = new TodoListStore();
