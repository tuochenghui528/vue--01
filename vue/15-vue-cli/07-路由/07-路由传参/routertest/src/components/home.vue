<template>
  <div>
      <p>我是首页</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>