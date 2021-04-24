<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">内容</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path:'/profile',query:{name:'tuo', age: 18}}">档案</router-link>
    <button @click="profileClick()">档案</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'tuochenghui',
          age: '20'
        }
      })
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
