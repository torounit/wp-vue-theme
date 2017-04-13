<template>
  <div>
    <div class="Posts">
      <div class="Posts__item" v-for="post in posts" :key="post.id">
        <div class="Posts__item-title">
          <a @click="goPost(post)">{{ post.title.rendered }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import router from '../router'
  import { mapActions } from 'vuex'
  import Post from './Post.vue'
  import {selectPost} from '../store/actions';

  export default {
    name: 'Posts',
    components: {},
    props: ['posts'],
    methods: {
      goPost(post) {
        let link = new URL(post.link);
        router.push(link.pathname);
        this.$store.dispatch('selectPost', {
          post
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Posts__item {
    padding 16px;
    width 100%;
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
    display flex
  }

  .Posts__item-title {
    padding 0 4px
    flex: 1 0 auto;
    width: 100%;
  }
</style>
