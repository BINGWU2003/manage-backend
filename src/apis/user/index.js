/*
 * @Author: BINGWU
 * @Date: 2024-08-18 20:30:26
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-18 20:52:43
 * @FilePath: \manage-backend\src\apis\user\index.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import http from '@/utils/http'
export const getUserById = (id) => {
  return http.get(`/admin/user/${2}`,)
}