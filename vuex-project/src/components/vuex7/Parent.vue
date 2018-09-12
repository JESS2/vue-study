<template>
  <div class="hello">
    <h2>Parent Component7</h2>
    <p>mapActions 이용
    </p>

    {{ parentCounter }}

    <button @click="addCounter">+</button>
    <button @click="change">change</button>

    <the-child></the-child>
  </div>
</template>

<script>
  import TheChild from './Child.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Parent',
    computed: {
      ...mapGetters({
        parentCounter: 'getCounter'
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
          duration: 1000
        })
      }
    },
    components: {
      TheChild
    }
  }
</script>
