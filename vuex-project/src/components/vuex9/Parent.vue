<template>
  <div class="hello">
    <h2>Parent Component</h2>
    {{ getCounter }}
    <button @click="increment">*</button>
  </div>
</template>

<script>
  import TheChild from './Child.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Parent',
    computed: {
        ...mapGetters([
            'getCounter'
        ])
    },
    methods: {
      ...mapActions([
        'increment'
      ])
    }
  }
</script>
