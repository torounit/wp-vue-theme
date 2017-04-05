import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import * as actions from './actions';
import mutations from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  plugins,
  actions
});

store.dispatch('fetchPost')
export default store;
