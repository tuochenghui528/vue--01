import axios from 'axios'

export function request(config) {
    //1.创建实例
    const instance = axios.create({
        baseURL: 'https://httpbin.org/',
        timeout: 5000
    })

    //2.axios的拦截器(发送失败和成功的拦截   响应失败和成功的拦截)
    instance.interceptors.request.use(config => {
        console.log(config)
        return config //一定要返回
    }, err => {

    })

    instance.interceptors.response.use(res => {
        console.log(res);
        return res;  //一定要return 
    }, err => {

    })
    return instance(config)
}