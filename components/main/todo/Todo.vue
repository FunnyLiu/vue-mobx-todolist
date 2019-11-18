<template>
  <li :class="[editingClass,completedClass]">
    <Viewer :id="id" :completed="completed" :text="text" />
    <Edit :id="id" :completed="completed" :text="text" />
  </li>
</template>

<script>
import Viewer from "./View";
import Edit from "./Edit";

export default {
  name: "Todo",
  components: {
    Viewer,
    Edit
  },
  props: {
    id: {
      type: Number,
      default: -1
    },
    completed: {
      type: Boolean,
      default: false
    },
    isEditing: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    editingClass() {
      return this.isEditing ? "editing" : "";
    },
    completedClass() {
      return this.completed ? "completed" : "";
    }
  },
  methods: {}
};
</script>
<style >
</style>