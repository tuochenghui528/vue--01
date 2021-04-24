<template>
  <div>
      <p>我是用户</p>
      <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>