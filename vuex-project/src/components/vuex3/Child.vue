<template>
    <div class="hello">
      <h2>Child Component3</h2>
      {{ childCounter }}
      
      <button @click="addCounter">+</button>
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
        addCounter () {
          this.$store.commit('addCounter')
        }
      }
    }
  
  </script>
  