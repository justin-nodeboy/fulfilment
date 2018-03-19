require('./stylus/main.styl');
import './css/site.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import VueKonva from 'vue-konva';

Vue.use(VueRouter);
Vue.use(VueKonva);
Vue.use(Vuetify, {
    theme: {
      primary: '#4BB8D7',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
      menuHighlight: '#ffde00'
    }
  });

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: require('./components/home/home.vue.html') },
    { path: '/workflows', component: require('./components/workflow/workflows.vue.html') },
    { path: '/workflows/create', component: require('./components/workflow/create-workflow.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
