<template>
  <div class="App">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  //@import '~normalize.css/normalize.css';

  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #EEE;
  }

</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .App {
    &__input {
      display block
      width 100%
      box-sizing border-box
      padding 16px
      border: none
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      margin: 16px 0
      background-color: #fff
    }
  }

  .App__box {
    margin: 16px 0
    display block
    background-color: #fff
    width 100%
    box-sizing border-box
    border: none
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

</style>
