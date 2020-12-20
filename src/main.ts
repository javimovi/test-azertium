import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import 'bootstrap/scss/bootstrap.scss';
import {buildStore} from "./stores/Store";
import { GridInstaller } from "@progress/kendo-grid-vue-wrapper";

Vue.use(GridInstaller);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: buildStore()
}).$mount('#app')
