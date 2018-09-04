<!-- App.vue가 루트 컴포넌트이다. -->

<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/todos">List</router-link>
    <router-link to="/example">Example</router-link>
    <router-link to="/axios">Axios</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
    }
  }
</script>