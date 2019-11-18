<template>
  <span class="todo-count">
    <strong>{{vm.activeCount}}</strong>
    {{vm.itemsLeft}}
  </span>
</template>


<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";

export default observer({
  name: "Count",
  components: {},
  props: {},
  data(){
    return {
      vm:store
    }
  },
  computed: {}
});
</script>
