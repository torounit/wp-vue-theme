import {FETCH_POSTS, SELECT_POST} from './mutation-types';
export default {
  [FETCH_POSTS] (state, {posts}) {
    state.posts = posts;
  },
  [SELECT_POST] (state, {post}) {
    state.post = post
  }
}
