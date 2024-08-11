import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const setUserInfo = (newUserInfo) => {
      userInfo.value = newUserInfo
    }
    const getUserInfo = computed(() => {
      return userInfo.value
    })
    return { setUserInfo, getUserInfo }
  },
  {
    persist: true,
  }
)
