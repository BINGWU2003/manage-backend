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