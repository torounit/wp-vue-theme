<template>
  <div class="Post">
    {{ post }}
    <div class="Post__title">{{ post.title.rendered }}</div>
  </div>

</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Post {
    padding 16px;
    width 100%;
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
    display flex
  }

  .Post__text {
    padding 0 4px
    flex: 1 0 auto;
  }
</style>
