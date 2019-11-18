import Vue from 'vue';
import  "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import App from './components/App.vue';


new Vue({
    el:'#app',
    render: h=> h(App)
})