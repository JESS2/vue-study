<template>
  <div class="hello">
    <h2>Parent Component2</h2>
    <p>컴포넌트에서 state에 직접 접근하여 값을 읽지 않고,<br>
      store.js의 getter에서 설정한 값을 읽는다.</p>

    {{ parentCounter }}

    <the-child></the-child>
  </div>
</template>

<script>
  import TheChild from './Child.vue'
  export default {
    name: 'Parent',
    computed: {
      parentCounter () {
        return this.$store.getters.getCounter
      }
    },
    components: {
      TheChild
    }
  }
</script>
