<template>
  <ul class="filters">
    <li>
      <a :class="selectedClass('')" href="#/" > All </a>
    </li>
    <li>
      <a :class="selectedClass('active')" href="#/active" > Active </a>
    </li>
    <li>
      <a :class="selectedClass('completed')" href="#/completed" > Completed </a>
    </li>
  </ul>
</template>


<script>
import { store } from "../../store/todoList";

export default {
  name: "Filters",
  components: {},
  props: {},
  data() {
    return {
      vm:store
    }
  },
  methods: {
    selectedClass(match) {
      return this.vm.filter === match ? "selected" : "";
    }
  }
};
</script>
