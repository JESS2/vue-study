<template>
  <div class="hello">
    <h2>Child Component2</h2>
    {{ childCounter }}
  </div>
</template>

<script>
  export default {
    name: 'Child',
    computed: {
      childCounter () {
        return this.$store.getters.getCounter
      }
    }
  }

</script>
