<template>
  <div class="ToggleAll">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="vm.isToggled"
      @change="onChange"
    />
    <label for="toggle-all">Mark all as complete</label>
  </div>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from "../../store/todoList";
export default observer({
  name: "ToggleAll",
  components: {},
  props: {},
  data() {
    return {
      vm:store
    };
  },
  methods: {
    onChange({ target: { checked } }) {
      this.vm.toggleAll(checked)
    }
  }
});
</script>
<style >
</style>