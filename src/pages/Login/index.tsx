import React, { useState } from 'react'
import { Button, Card, Flex, Form, Input, Space, message } from 'antd'
import { requestCaptcha, requestLogin } from '@/api'
import { useNavigate } from 'react-router'
import './style.less'

let times = 5 //短信验证码倒计时

const Login: React.FC = () => {
  //hooks
  const navigate = useNavigate()
  const [messageApi, contextHoler] = message.useMessage()
  //state
  const [loginStatus, setLoginStatus] = useState(false) //登录按钮状态
  const [captchaStatus, setCaptchaStatus] = useState(false) //验证码按钮状态
  const [captchaMessage, setCaptchaMessage] = useState('request') //验证码按钮信息
  /** 登录 */
  const doFinish = async (values: any) => {
    try {
      setLoginStatus(true)
      const res = await requestLogin(values)
      if (res.code == 200) {
        messageApi.success({ content: '登录成功.', duration: 1.5 })
        navigate('/home')
      } else {
        messageApi.error({ content: res.message, duration: 1.5 })
      }
    } catch (error: any) {
      messageApi.error({
        content: `登录请求失败，${error.message}`,
        duration: 1.5,
      })
    } finally {
      setLoginStatus(false)
    }
  }
  /** 获取验证码 */
  const doCaptcha = async () => {
    messageApi.open({
      type: 'loading',
      content: '正在获取验证码',
      duration: 0,
      key: 'key-captcha',
    })
    try {
      setCaptchaStatus(true)
      const captcha = await requestCaptcha()
      messageApi.info({
        content: `获取验证码为: ${captcha.data.captchaCode}.`,
        duration: 1.5,
      })
      //按钮置灰倒计时
      const task = setInterval(() => {
        if (times-- > 0) {
          setCaptchaMessage(`${times}s`)
        } else {
          clearInterval(task)
          setCaptchaStatus(false)
          setCaptchaMessage(`request`)
          times = 5
        }
      }, 1000)
    } catch (error: any) {
      messageApi.error({
        content: `验证码请求失败，${error.message}.`,
        duration: 1.5,
      })
    } finally {
      messageApi.destroy('key-captcha')
    }
  }
  return (
    <Flex className="layout">
      {contextHoler}
      <Card className="content" title="Simple-React" hoverable>
        <Form name="loginForm" onFinish={doFinish}>
          <Form.Item name="username">
            <Input size="large" placeholder="Username" />
          </Form.Item>
          <Form.Item name="passwor">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item name="captcha">
            <Space.Compact block>
              <Input size="large" placeholder="Captcha" />
              <Button size="large" onClick={doCaptcha} disabled={captchaStatus}>
                {captchaMessage}
              </Button>
            </Space.Compact>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              loading={loginStatus}
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  )
}

export default Login
