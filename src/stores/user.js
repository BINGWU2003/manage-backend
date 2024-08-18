/*
 * @Author: BINGWU
 * @Date: 2024-08-11 17:17:39
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-18 18:30:40
 * @FilePath: \manage-backend\src\stores\user.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null)
    const setUserInfo = (newUserInfo) => {
      userInfo.value = newUserInfo
    }
    const getUserInfo = computed(() => {
      return userInfo.value
    })
    return { setUserInfo, getUserInfo, userInfo }
  },
  {
    persist: true,
  }
)
