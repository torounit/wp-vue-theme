<template>
  <Posts :posts="posts"></Posts>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Posts from '../components/Posts.vue'
  export default {
    name: 'Index',
    components: {
      Posts
    },
    computed: mapGetters(['posts'])
  }
</script>
