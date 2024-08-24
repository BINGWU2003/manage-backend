import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    "ngrok-skip-browser-warning": "true" //跳过页面，可以正常请求接口
  },
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  const userStore = useUserStore()
  const token = userStore.getUserInfo?.token
  if (token) {
    config.headers.token = `${token}`
  }
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么

  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response.status === 401) {
    router.replace('/login')
    const userStore = useUserStore()
    userStore.setUserInfo('')
  }

  return Promise.reject(error)
})

export default instance