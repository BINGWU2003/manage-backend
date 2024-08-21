/*
 * @Author: BINGWU
 * @Date: 2024-08-18 20:30:26
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-21 23:53:57
 * @FilePath: \manage-backend\src\apis\user\index.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import http from '@/utils/http'

//根据用户姓名进行模糊查询
export const Queryusername = (params) => {
  return http.get('/admin/user', { params })
}
//修改用户信息
export const changeuserinformation = (params) => {
  return http.put('/admin/user', params)
}
//根据条件分页查询
export const querycriteria = (params) => {
  return http.get('/admin/user/page', { params }
  )
}
//批量删除用户
export const deleteuser = (params) => {
  console.log(params)


  return http.delete('/admin/user', { params })
}
//根据id查询用户
export const getUserById = (id) => {
  return http.get(`/admin/user/${id}`)
}