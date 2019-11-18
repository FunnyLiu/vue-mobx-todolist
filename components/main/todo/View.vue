<template>
		<div class="view">
			<Toggle :id="id" :completed="completed" />
			<label v-on:dblclick="onDoubleClick">{{text}}</label>
			<Destroy :id="id" />
		</div>
</template>

<script>
import { observer } from "mobx-vue";
import { store } from "../../../store/todoList";
import Toggle from './Toggle';
import Destroy from './Destroy';
export default observer({
  name: "Viewer",
  components: {
    Toggle,
    Destroy
  },
  props: {
    id:{
      type:Number,
      default:-1,
    },
    text:{
      type:String,
      defalut:''
    },
    completed:{
      type:Boolean,
      defalut:false
    }
  },
  data() {
    return {
      vm:store
    };
  },
  computed: {},
  methods: {
    onDoubleClick() {
      this.vm.setEditing(this.id);
    }
  }
});
</script>
<style >
</style>