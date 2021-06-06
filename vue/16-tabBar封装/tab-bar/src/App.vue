<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './view/tabBar/tabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>

</style>
