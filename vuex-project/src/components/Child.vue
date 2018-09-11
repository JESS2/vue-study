<template>
  <div class="hello">
    <h2>Child Component</h2>
    {{ passedCounter }}
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
  props: ['passedCounter'],
  methods: {
    addCounter () {
        this.passedCounter++
    },
    subCounter () {
        this.passedCounter--
    }
  }
}

</script>
