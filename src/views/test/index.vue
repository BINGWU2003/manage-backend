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
// 张三 123456
const handleClick = () => {
  router.push('/login')
}
onMounted(() => {
  const jsonString = `{
    "images": "string",
    "password": "123456",
    "permissions": -2147483648,
    "phone": "string",
    "status": -2147483648,
    "username": "string",
    "adminId": 1,
    "adminName": "string",
    "createBy": -2147483648,
    "createTime": "2019-08-24T14:15:22Z",
    "updateBy": -2147483648,
    "updateTime": "2019-08-24T14:15:22Z"
  }`;

  const jsObject = JSON.parse(jsonString);
  console.log(jsObject);

  console.log('测试页面')
  getUserById(1).then(res => {
    console.log('响应结果', res)
  }).catch(err => {
    console.log('响应失败', err)
  })
})
</script>

<style lang="scss" scoped></style>