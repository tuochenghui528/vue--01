<template>
  <div id="app">
    <h2>-----App-----</h2>
    <button @click="more20PeopleFun">显示大于20岁的人</button>
    <div v-if="flag">
      <ul v-for="item in $store.state.student" :key="item.id">
        <li>{{ item.name }}</li>
      </ul>
    </div>
    <div v-if="more20Flag">
      <ul v-for="item in $store.getters.more20People" :key="item.id">
        <li>{{ item.name }}</li>
      </ul>
    </div>
    <div>
      <h2>{{$store.getters.square}}</h2>
    </div>
    <div>{{$store.getters.moreAge(24)}}</div>
    <br />
    <h2>-----vuex----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      flag: true,
      more20Flag: false,
    };
  },
  methods: {
    more20PeopleFun() {
      this.flag = false;
      this.more20Flag = true;
    },
  },
};
</script>

<style>
</style>
