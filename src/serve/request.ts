import axios, { Method } from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://120.79.77.193:3000/'
const myaxios = axios.create({})
export default  function request(router:string,data:{},methods:Method){
        return new Promise((reslove,reject)=>{
            console.log(router)
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