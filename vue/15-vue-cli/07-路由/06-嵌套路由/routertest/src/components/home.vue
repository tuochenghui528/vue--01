<template>
  <div>
      <p>我是首页</p>
      <router-link to="/home/news" tag="button">新闻</router-link>
      <router-link to="/home/message" tag="button">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>