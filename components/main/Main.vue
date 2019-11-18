<template>
  <section class="main" :class="vm.noTodosClass">
    <ToggleAll />
    <TodoList /> 
  </section>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
import ToggleAll from './ToggleAll';
import TodoList from './TodoList';

export default observer({
  name: "Main",
  components: {
    ToggleAll,
    TodoList
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