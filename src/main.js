import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import VueRouter from 'vue-router';

import {BootstrapVue} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import HomeComponent from '@/components/HomeComponent';
import CatsComponent from '@/components/CatsComponent';
import DogsComponent from '@/components/DogsComponent';
import PetsComponent from '@/components/PetsComponent';



Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [{path: '/', component: HomeComponent},
{path: '/cats', component: CatsComponent},
{path: '/dogs', component: DogsComponent},
{path: '/pets/:species/:id', component: PetsComponent}];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
