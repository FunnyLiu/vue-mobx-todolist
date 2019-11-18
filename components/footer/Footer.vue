<template>
  <footer class="footer" :class="vm.noTodosClass">
    <Count />
    <Filters />
    <ClearCompleted />
  </footer>
</template>


<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
import ClearCompleted from "./ClearCompleted";
import Count from "./Count";
import Filters from "./Filters";
export default observer({
  name: "Footer",
  components: {
    ClearCompleted,
    Count,
    Filters
  },
  props: {},
  data:()=>{
    return {
      vm:store
    }
  },
  methods: {}
});
</script>
