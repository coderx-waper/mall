import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
        headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
    })

    // 请求拦截器
    instance.interceptors.request.use(config=>{
        // console.log('request-config', config);
        return config
    },err=>{
        console.log('request-err', err)
    })

    // 响应拦截器
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log('response-err', err)
    })


    return instance(config)
}
