<template>
  <ul class="todo-list">
    <Todo
      v-for="(item, index) in vm.visibleTodos"
      :key="item.id"
      :id="item.id"
      :text="item.text"
      :isEditing="item.isEditing"
      :completed="item.completed"
    />
  </ul>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
import Todo from "./todo/Todo";
export default observer({
  name: "TodoList",
  components: {
    Todo
  },
  props: {},
  data() {
    return {
      vm:store
    };
  },
  methods: {}
});
</script>
<style >
</style>