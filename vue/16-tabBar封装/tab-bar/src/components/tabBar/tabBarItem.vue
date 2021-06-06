<template>
  <div>
      <div class="tabarItem" @click="clickFun()">
        <div v-if="!isActive">
            <slot name="img"></slot>
        </div>
        <div v-else>
            <slot name="img-active"></slot>
        </div>
        <div :class="{active: isActive}">
            <slot name="title"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        path: String,
        default: '/home'
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive() {
            return this.$route.path == this.path;
      }
    },
    methods: {
        clickFun() {
            this.$router.push(this.path);
            console.log(this.$route.path, this.path)
        }
    }
}
</script>

<style>
.tabarItem {
  text-align: center;
}
.tabarItem img {
  width: 24px;
  height: 24px;
  padding-top: 5px;
}
.tabarItem p {
  margin: 5px 0;
}
.active {
    color: red;
}
</style>