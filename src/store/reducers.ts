import { combineReducers } from 'redux'
import mystate from './state'


function name(state = mystate.name,action:any){
    switch(action.type){
        case 'setName':
            return action.data;
        default:
            return state
    }
}
function banners(state = mystate.banners,action:any){
    switch(action.type){
        case 'setBanners':
            return action.data;
        default:
            return state
    }
}
export default combineReducers({
    name,
    banners
})