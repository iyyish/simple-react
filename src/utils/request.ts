import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

//axios实例
const baseUrl = '/api'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})
//请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    console.log('@网络错误~', error)
    return Promise.reject(error)
  }
)
//响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    console.log('@网络错误~', error)
    return Promise.reject(error)
  }
)

export default axiosInstance
