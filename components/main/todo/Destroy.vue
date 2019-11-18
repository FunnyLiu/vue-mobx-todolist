<template>
  <button class="destroy" @click="onClick" />
</template>

<script>

import { store } from "../../../store/todoList";
export default {
  name: "Destroy",
  components: {},
  props: {
    id:{
      type:Number,
      default:-1
    }
  },
  data() {
    return {
      vm:store
    };
  },
  computed: {},
  methods: {
    onClick() {
      this.vm.destroy(this.id);
    }
  }
};
</script>
<style >
</style>