<!--
 * @Author: BINGWU
 * @Date: 2024-08-18 19:05:56
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-18 19:06:01
 * @FilePath: \manage-backend\src\views\test\index.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div>
    <h1>测试</h1>
    <el-button @click="handleClick" type="primary">去登陆页面</el-button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getUserById } from '@/apis/user'
const router = useRouter()
const handleClick = () => {
  router.push('/login')
}
onMounted(() => {
  console.log('测试页面')
  getUserById(1).then(res => {
    console.log('响应结果', res)
  }).catch(err => {
    console.log('响应失败', err)
  })
})
</script>

<style lang="scss" scoped></style>