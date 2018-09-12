<template>
  <div class="hello">
    <h2>Parent Component6</h2>
    <p>Actions를 이용하여 값을 변경
    </p>

    {{ parentCounter }}

    <button @click="addCounter">+</button>

    <the-child></the-child>
  </div>
</template>

<script>
  import TheChild from './Child.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Parent',
    computed: {
      ...mapGetters({
        parentCounter: 'getCounter'
      })
    },
    methods: {
      addCounter () {
        this.$store.dispatch('addCounter')
      }
    },
    components: {
      TheChild
    }
  }
</script>
