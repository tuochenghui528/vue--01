<template>
  <div id="app">
    <!-- tag属性是指定渲染成什么标签  replace加上之后就默认是history.replaceState() 阻止了浏览器的前进后退-->
    <!-- active-class是设置选中的样式 有简便写法  直接在路由实例化的时候添加linkActiveClass: active; 就相当于给每个路由添加了active-classd的效果-->

    <!-- 如果想通过代码跳转  thhis.$router.push('/home')或者this.$router.replace('/home') -->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">内容</router-link>
    <router-view></router-view>
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
.active {
  color: red;
}
</style>
