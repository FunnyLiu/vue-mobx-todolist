<template>
  <div>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      v-model="text"
      @keydown="onKeyDown"
      autofocus
    />
  </div>
</template>


<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
export default observer({
  name: "Newtodo",
  data() {
    return {
      text: "",
      vm:store
    };
  },
  methods: {
    onKeyDown(event) {
      const { keyCode } = event;
      if (keyCode !== 13) {
        return;
      }
      event.preventDefault();
      const newText = this.text.trim();

      if (newText !== "") {
        // 改抛事件为直接操作store
        this.vm.addTodo(newText);
        this.text = "";
      }
    }
  }
});
</script>
