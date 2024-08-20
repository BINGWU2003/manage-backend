import http from '@/utils/http'
//修改药品信息
export const changedruginformation = (params) => {
    return http.put('/admin/medicine', params)
}
//批量删除药品
export const Deleteinformation = (params) => {
    return http.delete('/admin/medicine', params)
}
//新增药品 post请求 body参数
export const Newmedicines = (params) => {
    return http.post('/admin/medicine', params)
}
//根据id查询药品信息
export const QuerydrugID = (id) => {
    return http.get(`/admin/medicine/${id}`)
}
//药品分页查询 get请求 query参数
export const Drugpaginationquery = (params) => {
    return http.get('/admin/medicine/page', {
        params
    })
}
// get请求 body参数 改接口  body参数->query参数
//post请求 query参数 接口要改 query参数->body参数

//药品起售、停售    
 export const Drugdiscontinued = (params) => {
   return http.post(`/admin/medicine/status`, params)
 }
//根据类型查询药品
export const Searchdrugstype = (params) => {
    return http.get('/admin/medicine/list', params)
}
