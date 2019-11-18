<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>


<script>
import { observer } from "mobx-vue";
import { store } from "../store/todoList";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
export default observer({
  components: {
    Header,
    Main,
    Footer
  },
  data: () => {
    return {
      vm: store
    };
  },
  mounted() {
    window.addEventListener(
      "hashchange",
      event => {
        const newUrl = event.newURL;
        const curHash = newUrl.split("/")[4];
        switch (curHash) {
          case "":
            this.vm.setFilter('')
            break;
          case "active":
            this.vm.setFilter('active')
            break;
          case "completed":
            this.vm.setFilter('completed')
            break;
          default:
            this.vm.setFilter('')
            break;
        }
      },
      false
    );
  },
  methods: {}
});
</script>
