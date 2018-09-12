<template>
  <div id="app">
    <img src="./assets/logo.png" width="30px">
    <br>
    <router-link to="/">home</router-link>
    <router-link to="/parent1">parent1</router-link>
    <router-link to="/parent2">parent2</router-link>
    <router-link to="/parent3">parent3</router-link>
    <router-link to="/parent4">parent4</router-link>
    <router-link to="/parent5">parent5</router-link>
    <router-link to="/parent6">parent6</router-link>
    <router-link to="/parent7">parent7</router-link>
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
