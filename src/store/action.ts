export function setName(data:string){
    return(dispatch:any,getState:string)=>{
        dispatch({type:'setName',data:data})
    }
}