<template>
  <input class="toggle" type="checkbox" :checked="completed" @change="onChange" />
</template>

<script>
import { store } from "../../../store/todoList";
export default {
  name: "Toggle",
  components: {},
  props: {
    id: {
      type: Number,
      default: -1
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      vm:store
    };
  },
  computed: {},
  methods: {
    onChange() {
      this.vm.toggleOne(this.id);
    }
  }
};
</script>
<style >
</style>