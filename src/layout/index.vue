<template>
  <div class="layout">
    <Aside />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Aside from '@/layout/aside/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  .main {
    flex: 1;
    overflow: auto;
    padding: 20px;
  }
}
</style>