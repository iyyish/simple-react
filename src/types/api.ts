/* 请求响应数据 */
export interface ApiResponse {
  code: number
  message: string
  data: any
}
/** 验证码 */
export interface CaptchaResponse extends ApiResponse {
  data: {
    captchaCode: number
  }
}
/** 用户登录响应数据 */
export interface LoginResponse extends ApiResponse {
  data: {
    accessToken: string
    refreshToken: string
  }
}
