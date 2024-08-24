<!--
 * @Author: BINGWU
 * @Date: 2024-08-24 13:42:05
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-24 15:18:08
 * @FilePath: \manage-backend\src\views\dashboard\index.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div>
    dashboard
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script setup>
import preview from '@/assets/audio/preview.mp3'
import reminder from '@/assets/audio/reminder.mp3'
const audio = new Audio(preview)
const handleClick = () => {
  console.log('click')
  audio.play()
}
</script>

<style lang="scss" scoped></style>