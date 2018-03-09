require('./stylus/main.styl');
import './css/site.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
