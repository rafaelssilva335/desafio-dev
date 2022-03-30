import store from './store/store';
require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('main-app', require('./components/MainApp.vue').default);

const app = new Vue({
    store : store,
    el: '#app',
});
