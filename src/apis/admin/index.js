import http from '@/utils/http'
export const adminLogin = (params) => {
  return http.post('/admin/admin/login', params)
}