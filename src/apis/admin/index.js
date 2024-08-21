import http from '@/utils/http'
//审核通过用户提交的入驻申请
export const review = (params) => {
  return http.put('/admin/admin/go', params)
}
//查询所有入驻申请
export const Checkapplications = (params) => {
  return http.get('/admin/admin/doctor', params)
}
//审核不通过用户提交的入驻申请
export const Checknotapplications = (params) => {
  return http.put('/admin/admin/lose', params)
}
//启用、禁用管理员账号
 export const disableaccounts = (params) => {
 return http.post(`/admin/admin/status`, params)
 }
//根据权限分页查询管理员
export const Querypermissions = (params) => {
  return http.get('/admin/admin/page', params)
}
//管理员登录
export const adminLogin = (params) => {
  return http.post('/admin/admin/login', params)
}
//新增管理员
export const Addedadministrators = (params) => {
  return http.post('/admin/admin/login', params)
}
//根据id查询管理员
export const QueryadministratorID = (id) => {
  return http.get(`/admin/admin/${id}`)
}
//编辑管理员信息
export const Editadmininformation = (params) => {
  return http.put('/admin/admin', params)
}
//退出登录
export const Signout = (params) => {
  return http.post('/admin/admin/logout', params)
}



/*
// 参数在url里的
export const checkapply1 = (id) => {
  return http.get(`/admin/admin/${id}`)
}
// query参数
export const checkapply2 = (params) => {
  return http.get('/admin/admin/page',{
    params
  })
}
// get请求没有参数
export const checkapply3 = () => {
  return http.get('/admin/admin/doctor')
}
*/
