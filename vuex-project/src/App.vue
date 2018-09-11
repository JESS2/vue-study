<template>
  <div id="app">
    <img src="./assets/logo.png" width="30px">
    <br>
    <router-link to="/">home</router-link>
    <router-link to="/parent">parent</router-link>
    <h1>Vuex 상태 관리 라이브러리 사용하기</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
