<template>
  <div id="app">

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {request} from './network/request'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    request({
      urt: '/get'
    }).then(res => {
      console.log(res);
    })
  }
}
</script>

<style>
</style>
