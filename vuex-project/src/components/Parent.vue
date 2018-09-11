<template>
  <div class="hello">
    <h2>Parent Component</h2>
    {{ counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <the-child :passedCounter="counter"></the-child>
  </div>
</template>

<script>
import TheChild from './Child.vue'
export default {
  name: 'Parent',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
      addCounter () {
        this.counter++
      },
      subCounter () {
        this.counter--
      }
  },
  components: {
    TheChild
  }
}

</script>
