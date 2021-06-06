<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="uploadClick('kobe')">actions</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    uploadClick(name) {
      this.$store.dispatch('aupdateFun', name).then(() => {
        console.log('success');
      });
    }
  }
}
</script>

<style>

</style>
