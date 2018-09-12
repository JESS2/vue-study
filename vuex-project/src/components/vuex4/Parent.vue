<template>
  <div class="hello">
    <h2>Parent Component4</h2>
    <p>Mutations에 인자 값 넘기기
    </p>

    {{ parentCounter }}

    <button @click="changeCounter">change</button>

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
      changeCounter () {
        this.$store.commit('changeCounter', {
          value: 10,
          arr: ["a", "b"]
        })
      }
    },
    components: {
      TheChild
    }
  }
</script>
