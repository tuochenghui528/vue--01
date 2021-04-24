<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">内容</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  }
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
