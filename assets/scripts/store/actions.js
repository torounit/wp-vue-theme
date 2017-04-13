import {ADD_POST, FETCH_POST, SELECT_POST} from './mutation-types';
import WPAPI from 'wpapi'
const wp = new WPAPI({ endpoint: '/wp-json/' });
export const fetchPost = async ({commit}) => {
  let posts = await wp.posts()
  commit(FETCH_POST, {
    posts
  })
}

export const addPost = ({commit}, text) => {
  if (text) {
    commit(ADD_POST, {
      text
    })
  }
}

export const selectPost = ({commit}, post) => {
  commit(SELECT_POST, post)
}
