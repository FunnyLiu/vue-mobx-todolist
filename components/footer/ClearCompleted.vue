<template>
  <button class="clear-completed" :class="vm.hasTodosClass" @click="onClick">Clear completed</button>
</template>


<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
export default observer({
  name: "ClearCompleted",
  components: {},
  props: {},
  data() {
    return {
      vm:store
    }
  },
  computed: {},
  methods: {
    onClick() {
      this.vm.clearCompleted();
    }
  }
});
</script>
