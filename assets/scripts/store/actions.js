import {ADD_POST, TOGGLE_POST, DELETE_POST, FETCH_POST, SELECT_FILTER} from './mutation-types';
import WPAPI from 'wpapi'
//import WP from '../../../node_modules/wpapi/browser/wpapi';
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

export const togglePost = ({commit}, todo) => {
  commit(TOGGLE_POST, {
    todo
  })
}

export const deletePost = ({commit}, todo) => {
  commit(DELETE_POST, {
    todo
  })
}

export const selectFilter = ({commit}, filter) => {
  commit(SELECT_FILTER, {
    filter
  })
}
