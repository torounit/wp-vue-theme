<template>
  <Single :post="post"></Single>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Single from './templates/Single.vue'
  export default {
    name: 'Singular',
    components: {
      Single
    },
    computed: mapGetters(['post'])
  }
</script>
