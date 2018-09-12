<template>
  <div class="hello">
    <h2>Child Component</h2>
    <!-- {{ childCounter }} -->
    <!-- <button @click="addCounter">+</button>
    <button @click="subCounter">-</button> -->
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  export default {
    name: 'Child',
    data () {
      return {
      
      }
    },
    computed: {
      // ...mapGetters([
      //   'getCounter'
      // ])
      // childCounter () {
      //     return this.$store.getters.getCounter
      // },
      // addCounter () {
      //   return this.$store.getters.addCounter
      // },
      // subCounter () {
      //   return this.$store.getters.subCounter
      // }
    }
  }

</script>
