import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue';
import Single from '../pages/Single.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/**',
    name: 'post',
    component: Single,
  },
];

const router = new VueRouter({ mode: 'history', routes });
export default router;
