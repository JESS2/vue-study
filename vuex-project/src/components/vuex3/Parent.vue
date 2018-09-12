<template>
  <div class="hello">
    <h2>Parent Component3</h2>
    <p>Vuex에 내장된 helper 함수인 mapGetters로<br>
      store.js의 getters를 읽는다.<br>
      mutations를 사용하여 state의 counter 값을 증가시킨다.
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
        this.$store.commit('addCounter')
      }
    },
    components: {
      TheChild
    }
  }
</script>
