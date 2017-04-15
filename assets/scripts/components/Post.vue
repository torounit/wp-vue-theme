<template>
  <div class="Post">
    <h3 class="Post__title">{{ post.title.rendered }}</h3>
    <div v-html=post.content.rendered></div>
  </div>

</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Post {
    padding 16px;
    width 100%;
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
  }

</style>
