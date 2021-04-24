<template>
  <div>
      <p>我是用户页面</p>
      <h2>我是{{userId}}</h2>
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