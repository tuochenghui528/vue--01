<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">内容</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path:'/profile',query:{name:'tuo', age: 18}}">档案</router-link>
    <button @click="profileClick()">档案</button>

    <!-- 点击路由的时候上一个路由组件就会被销毁  在点击回来的时候会被重新创建  如果不想让上个组件销毁  就使用keep-alive exclude属性会去掉后面的组件  后面的组件依然会被销毁-->
    <keep-alive exclude="about,user">
      <router-view/>
    </keep-alive>

    <!-- 使用的keep-alive后 组件内可以使用actived()和deActived()方法  在该组件内会执行actived方法  离开该组件进入别的路由会执行deActived方法 -->
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
