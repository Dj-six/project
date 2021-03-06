import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 10000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 发送网络请求
  return instance(config)
}