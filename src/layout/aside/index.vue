<template>
  <div class="aside">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <el-menu-item index="/dashboard">
        <el-icon><icon-menu /></el-icon>
        <template #title>控制面板</template>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon><icon-menu /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/admin">
        <el-icon><icon-menu /></el-icon>
        <template #title>管理员</template>
      </el-menu-item>
      <el-menu-item index="/drug">
        <el-icon><icon-menu /></el-icon>
        <template #title>药品管理</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
</style>