<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello Vue'
        }
    }
}
</script>

<style scope>
    h2 {
        color: green;
    }
</style>
