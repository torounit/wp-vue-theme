<template>
  <Post :post="post"></Post>
</template>

<script>
  import Post from '../../components/Post.vue'
  export default {
    name: 'Single',
    components: {
      Post
    },
    props: ['post']
  }
</script>
