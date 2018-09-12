<template>
  <div class="hello">
    <h2>Parent Component1</h2>
    <p>부모 컴포넌트와 자식 컴포넌트를 props로 데이터를 관리하지 않고,<br>
      vuex의 state를 사용하여 데이터를 관리한다.</p>

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