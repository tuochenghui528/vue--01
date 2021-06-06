<template>
  <div>
    <div class="tabar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabar {
  height: 64px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}
</style>