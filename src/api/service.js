import Util from '@/libs/util'
//  登录
export const queryUserAll = data => Util.http.get('/wx/users/queryUserAll', {})
// 短信验证码
