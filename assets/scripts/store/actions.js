import {ADD_POST, FETCH_POSTS, SELECT_POST} from './mutation-types';
import WPAPI from 'wpapi'
import config from '../config'
const wp = new WPAPI({ endpoint: '/wp-json/' });



export const fetchPosts = async ({commit}) => {
  let posts = await wp.posts()
  commit(FETCH_POSTS, {
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


export const initPosts = async ({commit}) => {
  let post = {};
  if ( !! config.postType ) {
    config.postType == 'posts'
  }
  if(config.postId) {
    let postsAPI = wp[config.postType]()
    post = await postsAPI.id(config.postId)
    commit(SELECT_POST, {post})
  }
  else if (config.termId && config.taxonomy) {
    let postsAPI = wp[config.postType]()
    let posts = await postsAPI.param(config.taxonomy,[config.termId])
    commit(FETCH_POSTS, {posts})
  }
  else {
    fetchPosts({commit})
  }

}
