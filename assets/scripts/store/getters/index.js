export const post = state => {
  let id = state.postId;
  if(id) {
    let post = state.posts.find(post => post.id == id);
    if (post) {
      return post
    }
  }

  return {
    id: {},
    title: {
      rendered: ''
    },
    content:{
      rendered: '',
    }
  }
};

export const posts = state => {
  return state.posts
};
