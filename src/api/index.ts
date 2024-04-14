import request from '@/utils/request'
import { CaptchaResponse, LoginResponse } from '@/types/api'

const requestCaptcha = () => request.get('/user/captcha') as Promise<CaptchaResponse>
const requestLogin = (data: any) => request.post('/user/login', data) as Promise<LoginResponse>

export { requestCaptcha, requestLogin }
