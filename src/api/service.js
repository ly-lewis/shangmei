import Util from '@/libs/util'
//  通讯录：获取所有用户信息
export const queryUserAll = data => Util.http.get('/wx/users/queryUserAll', {})
// 根据name查询员工
export const queryUsersByName = data => Util.http.get('/wx/users/queryUsersByName', {}) 