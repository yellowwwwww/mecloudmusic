export function setName(data:string){
    return(dispatch:any,getState:string)=>{
        dispatch({type:'setName',data:data})
    }
}
export function setBanners(data:[]){
    return(dispatch:any,getState:[])=>{
        dispatch({type:'setBanners',data:data})
    }
}