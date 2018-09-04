<!-- App.vue가 루트 컴포넌트이다. -->

<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/todos">List</router-link>
    <router-link to="/example">Example</router-link>
    <router-link to="/axios">Axios</router-link>
    <router-link to="/detail">Detail</router-link>
    <br>
    <router-link to="/listPage">ListPage</router-link>
    <router-link to="/detailPage">DetailPage</router-link>
    
    <!-- router-view는 최상위 outlet임. 최상위 경로와 일치하는 컴포넌트를 렌더링.-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>