import request from '../serve/request'
//轮播
export function banner(){
    // 0pc1android2ipone3ipad
    return request('/banner?type=2','','GET')
}