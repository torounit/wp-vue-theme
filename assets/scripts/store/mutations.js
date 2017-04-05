import {ADD_POST, TOGGLE_POST, DELETE_POST, FETCH_POST, SELECT_FILTER} from './mutation-types';
export default {
  [FETCH_POST] (state, {posts}) {
    state.posts = posts;
  },
  [ADD_POST] (state, {text}) {
    state.posts.push({
      text,
      done: false
    })
  },
  [TOGGLE_POST] (state, {todo}) {
    todo.done = !todo.done
  },
  [DELETE_POST] (state, {todo}) {
    state.posts.splice(state.posts.indexOf(todo), 1)
  },
  [SELECT_FILTER] (state, {filter}) {
    state.filter = filter
  }
}
