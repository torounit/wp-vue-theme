<template>
  <Post :post="post"></Post>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Post from '../components/Post.vue'
  export default {
    name: 'Single',
    components: {
      Post
    },
    computed: mapGetters(['post'])
  }
</script>
