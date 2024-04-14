import React from 'react'
import { Button, Card, Flex, Form, Input, Space, message } from 'antd'
import { requestCaptcha, requestLogin } from '@/api'
import './style.less'

const Login: React.FC = () => {
  //hooks
  const [messageApi, contextHoler] = message.useMessage()

  const doFinish = (values: any) => {}
  const doCaptcha = () => {
    messageApi
      .open({
        type: 'loading',
        content: '正在获取验证码',
        duration: 1,
      })
      .then(async () => {
        try {
          const captcha = await requestCaptcha()
          messageApi.info({
            content: `获取验证码为: ${captcha.data.captchaCode}.`,
            duration: 1.5,
          })
        } catch (error: any) {
          messageApi.error({
            content: `获取验证码错误，${error.message}.`,
            duration: 1.5,
          })
        }
      })
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
              <Button size="large" onClick={doCaptcha}>
                Request
              </Button>
            </Space.Compact>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  )
}

export default Login
