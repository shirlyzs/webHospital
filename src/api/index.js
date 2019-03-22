import axios from 'axios'
const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// request请求拦截
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // if (config.method === 'post') {
    //   config.data = qs.stringify(config.data)
    // }
    return config
  },
  error => {
    console.log(error, '网络请求拦截抛错')
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 1) {
      console.log(res.errmsg)
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    console.log('网络响应抛错' + error)
    return Promise.reject(error)
  }
)

export default service
