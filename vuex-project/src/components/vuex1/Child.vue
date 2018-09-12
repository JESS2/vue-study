<template>
  <div class="hello">
    <h2>Child Component1</h2>
    {{ this.$store.state.counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
    
    }
  },
  methods: {
    addCounter () {
        this.$store.state.counter++
    },
    subCounter () {
        this.$store.state.counter--
    }
  }
}
</script>