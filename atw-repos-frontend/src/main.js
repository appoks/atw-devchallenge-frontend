import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faEye, faCodeBranch, faBug, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar, faEye, faCodeBranch, faBug, faClock)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

import './assets/stylesheets/application.scss';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
