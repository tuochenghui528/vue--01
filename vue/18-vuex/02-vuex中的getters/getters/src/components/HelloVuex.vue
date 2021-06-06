<template>
  <div class="hello">
    <ul v-for="item in $store.state.student" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
