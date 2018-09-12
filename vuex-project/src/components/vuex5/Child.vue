<template>
    <div class="hello">
      <h2>Child Component5</h2>
      {{ childCounter }}
      
      <button @click="addCounter">+</button>
    </div>
  </template>
  
  <script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
      name: 'Child',
      computed: {
        ...mapGetters({
          childCounter: 'getCounter'
        })
      },
      methods: {
        ...mapMutations([
          'addCounter'
        ])
      }
    }
  
  </script>
  