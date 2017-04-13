import {ADD_POST, FETCH_POST, SELECT_POST} from './mutation-types';
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
  [SELECT_POST] (state, {post}) {
    state.postId = post.id
  }
}
