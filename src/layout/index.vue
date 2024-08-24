<!--
 * @Author: BINGWU
 * @Date: 2024-08-18 18:43:04
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-21 23:32:17
 * @FilePath: \manage-backend\src\layout\index.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="layout">
    <Aside />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { websocket } from '@/utils/websocket'
import { RouterView } from 'vue-router'
import Aside from '@/layout/aside/index.vue'
import { onUnmounted } from 'vue'
const ws = websocket()
onUnmounted(() => {
  ws.close()
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;

  .main {
    flex: 1;
    overflow: auto;
    padding: 40px;
  }
}
</style>