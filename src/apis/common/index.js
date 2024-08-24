import http from '@/utils/http'

export const adminCommonUpload = (file) => {
  return http.post('/admin/common/upload', file)
}