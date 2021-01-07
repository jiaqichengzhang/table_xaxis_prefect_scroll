import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './directive.js'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
