<!--
 * @Author: BINGWU
 * @Date: 2024-08-11 16:17:47
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-11 16:48:12
 * @FilePath: \manage-backend\src\views\login\LoginView.vue
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
            <div class="title-text">
              欢迎来到这个界面，您可以通过这个界面登录到系统
            </div>
            <!-- <div class="other-login" ref="otherLoginRef">
              <img src="@/assets/QQ.png" alt="">
              <span>使用QQ登录</span>
            </div> -->
            <div class="login-form">
              <input type="text" class="user" placeholder="账号">
              <input type="password" class="password" placeholder="密码">
            </div>
            <button class="login-btn">登 录</button>
            <!-- <div class="tips">
              <span>还没有账号?</span>
              <span>注册</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const otherLoginRef = ref(null)
const contentRef = ref(null)
let flag = 0
function changeBg() {
  if (flag % 2 == 0)
    otherLoginRef.value.style.backgroundColor = 'rgb(248, 182, 217)'
  else
    otherLoginRef.value.style.backgroundColor = 'rgb(182, 211, 248)'
  if (flag == 4)
    flag = 1
  else
    flag++
  contentRef.value.style.background = `url(src/assets/bg${flag}.png) no-repeat`
  return changeBg
}

onMounted(() => {
  console.log(otherLoginRef.value)
  setInterval(changeBg(), 5000)

})
</script>

<style lang="scss" scoped>
@import '@/assets/css/login.css';
</style>