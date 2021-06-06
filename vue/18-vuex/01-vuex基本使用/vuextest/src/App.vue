<template>
  <div id="app">
    ------App------ 
    <h2>{{$store.state.count}}</h2>
    <button @click="addFun">+</button>
    <button @click="subtract">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <hr>
     ------Vuex------- 
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {

    }
  },
  methods: {
    addFun() {
      this.$store.commit('increment');
    },
    subtract() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      this.$store.commit('addCounter', count);//传参 多个参数的时候可以用对象传过去

      //另外一种提交风格
      this.$store.commit({
        type: 'addCounter',
        count: count,
        age: 15//多个参数是着样传的  在store中还是一个参数count  但是这时候的count已经成对象了
      })
    }
  }
}
</script>

<style>

</style>
