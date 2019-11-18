<template>
  <input class="edit" ref="inputEl" :value="editText" @change="onChange" @keydown="onKeyDown" />
</template>

<script>
import { store } from "../../../store/todoList";

export default {
  name: "Edit",
  components: {},
  props: {
    id: {
      type: Number,
      default: -1
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editText:this.text,
      vm:store
    };
  },
  computed: {},
  methods: {
    onChange({ target: { value } }){
      this.editText = value;
    },
    onSubmit({ target: { value: text } }) {
      if (text.trim() !== "") {
        this.vm.edit(this.id, text);
      }
    },
    onKeyDown(event) {
      const { keyCode } = event;

      if (keyCode === 13) {
        this.onSubmit(event);
      }

      if (keyCode === 27) {
        this.editText = text;
      }
    }
  }
};
</script>
<style >
</style>