import request from '../serve/request'

//轮播
export function banner(){
    // 0pc1android2ipone3ipad
    return request('/banner?type=2','','GET')
}
//推荐歌单
export function playList(data:{}){
    return request(`/personalized`,data,'GET')
}
//每日音乐
export function nowMusicList(data:{}){
    return request(`/personalized/newsong`,data,'GET')
}
//电台
export function dtList(data:{}){
    return request(`/dj/personalize/recommend`,data,'GET')
}
//detail
export function SongDetail(data:{}){    
    return request(`/playlist/detail`,data,'GET')
}