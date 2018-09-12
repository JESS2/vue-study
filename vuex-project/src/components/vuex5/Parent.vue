<template>
  <div class="hello">
    <h2>Parent Component5</h2>
    <p>Vuex에 내장된 mapMutations를 이용하여 코드 가독성을 높일 수 있다.
    </p>

    {{ parentCounter }}

    <button @click="addCounter">+</button>
    <button @click="change">change</button>

    <the-child></the-child>
  </div>
</template>

<script>
  import TheChild from './Child.vue'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'Parent',
    computed: {
      ...mapGetters({
        parentCounter: 'getCounter'
      })
    },
    methods: {
      ...mapMutations([
        'addCounter',
        'changeCounter'
      ]),
      change () {
        this.changeCounter({
          value: 15
        })
      }
    },
    components: {
      TheChild
    }
  }
</script>
