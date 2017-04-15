import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue';
import Singular from '../pages/Singular.vue';
import config from '../config'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: config.pageOnFront ? Singular : Index
  },
  {
    path: '/category/**',
    name: 'category',
    component: Index,
  },
  {
    path: '/**',
    name: 'singular',
    component: Singular,
  },
];

const router = new VueRouter({ mode: 'history', routes });
export default router;
