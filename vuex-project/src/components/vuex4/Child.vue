<template>
    <div class="hello">
      <h2>Child Component4</h2>
      {{ childCounter }}
      
      <button @click="changeCounter">change</button>
    </div>
  </template>
  
  <script>
    import { mapGetters } from 'vuex'
    export default {
      name: 'Child',
      computed: {
        ...mapGetters({
          childCounter: 'getCounter'
        })
      },
      methods: {
        changeCounter () {
          this.$store.commit('changeCounter', {
            value: 20,
            arr: ["a", "b", "c"]
          })
        }
      }
    }
  
  </script>
  