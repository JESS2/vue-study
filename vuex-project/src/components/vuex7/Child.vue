<template>
    <div class="hello">
      <h2>Child Component7</h2>
      {{ childCounter }}

      <button @click="addCounter">+</button>
      <button @click="change">change</button>
    </div>
  </template>
  
  <script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      name: 'Child',
      computed: {
        ...mapGetters({
          childCounter: 'getCounter'
        })
      },
      methods: {
        ...mapActions([
          'addCounter',
          'changeCounter'
        ]),
        change () {
          this.changeCounter({
            value: 15,
            duration: 3000
          })
        }
      }
    }
  
  </script>
  