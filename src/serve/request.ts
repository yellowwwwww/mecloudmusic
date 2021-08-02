import axios, { Method } from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3001'
const myaxios = axios.create({})
export default  function request(router:string,data:{},methods:Method){
    return new Promise((reslove,reject)=>{
        myaxios({
            url:router,
            data:data,
            method:methods,
            params:data
        }).then(res=>{
            reslove(res)
        }).catch(res=>{
            reject(res)
        })
        })
}       