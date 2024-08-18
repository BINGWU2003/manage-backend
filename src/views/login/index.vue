<!--
 * @Author: BINGWU
 * @Date: 2024-08-11 16:17:47
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-18 19:10:19
 * @FilePath: \manage-backend\src\views\login\index.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="login">
    <div class="box">
      <div class="content" ref="contentRef">
        <div class="login-wrapper">
          <div class="mask"></div>
          <div class="login-content">
            <h1>登 录</h1>
            <el-button color="#626aef" @click="handleClick">去测试页面</el-button>
            <div class="title-text">
              欢迎来到这个界面，您可以通过这个界面登录到系统
            </div>
            <div class="login-form">
              <input type="text" class="user" placeholder="账号" v-model="form.username">
              <input type="password" class="password" placeholder="密码" v-model="form.password">
            </div>
            <button class="login-btn" @click="handleLogin">登 录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { adminLogin } from '@/apis/admin/index'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const contentRef = ref(null)
const form = ref({
  username: '',
  password: ''
})
let flag = 0
function changeBg() {
  if (flag == 4)
    flag = 1
  else
    flag++
  contentRef.value.style.background = `url(src/assets/bg${flag}.png) no-repeat`
  return changeBg
}
const handleClick = () => {
  router.push('/test')
}
const handleLogin = async () => {
  try {
    const res = await adminLogin({
      username: form.value.username,
      password: form.value.password
    })
    userStore.setUserInfo(res.data.data)
    router.push('/dashboard')
  } catch (error) {
    console.log(error)
  }

}
onMounted(() => {
  setInterval(changeBg(), 5000)
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/login.css';
</style>