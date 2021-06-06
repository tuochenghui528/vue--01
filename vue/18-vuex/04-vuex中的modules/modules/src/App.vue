<template>
  <div id="app">
    <h2>{{$store.state.name}}</h2>
    <br>
    <h2>-------muduleA中的内容---------</h2>
    <h2>{{$store.state.a.module_names}}</h2>
    <button @click="updateNames('kobe Bryant')">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="syancUpdate('Nash')">异步修改名字</button>
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
    updateNames(name) {
      this.$store.commit('updateNames', name);
    },
    syancUpdate(name) {
      this.$store.dispatch('aupdate', name)
    }
  }
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
</style>
