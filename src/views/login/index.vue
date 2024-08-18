<!--
 * @Author: BINGWU
 * @Date: 2024-08-11 16:17:47
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-18 20:28:08
 * @FilePath: \manage-backend\src\views\login\index.vue
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
-->
<template>
  <div class="login">
    <div class="box">
      <div class="content" ref="contentRef" :style="backgroundStyle">
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
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { adminLogin } from '@/apis/admin/index'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import bg1 from '@/assets/images/bg1.png'
import bg2 from '@/assets/images/bg2.png'
import bg3 from '@/assets/images/bg3.png'
import bg4 from '@/assets/images/bg4.png'
const router = useRouter()
const userStore = useUserStore()
const contentRef = ref(null)
const bgList = [bg1, bg2, bg3, bg4]
const form = ref({
  username: '',
  password: ''
})
const currentIndex = ref(0)
const currentBg = computed(() => bgList[currentIndex.value])
let timer = null
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${currentBg.value})`,
}))
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
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bgList.length
  }, 5000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/login.css';
</style>