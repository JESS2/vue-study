<template>
  <div class="hello">
    <h2>Parent Component</h2>
    {{ this.$store.state.counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <the-child></the-child>
  </div>
</template>

<script>
import TheChild from './Child.vue'
export default {
  name: 'Parent',
  methods: {
      addCounter () {
        this.$store.state.counter++
      },
      subCounter () {
        this.$store.state.counter--
      }
  },
  components: {
    TheChild
  }
}

</script>
