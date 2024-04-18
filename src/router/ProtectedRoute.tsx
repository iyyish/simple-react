import { useEffect } from 'react'
import { useNavigate, useLocation, matchRoutes } from 'react-router'
import { routers } from '.'
import { getItem } from '@/utils/token'
import { message } from 'antd'

const ProtectedRoute = ({ children, auth }: any) => {
  //hooks
  const navigate = useNavigate()
  const location = useLocation()
  //路由信息
  const matchs = matchRoutes(routers, location)
  //当前请求是否是正确路由
  const isExist = matchs?.some((item) => item.pathname == location.pathname)
  //用户信息
  const token = getItem('access-token') || ''

  useEffect(() => {
    if (token == '' && auth) {
      message.warning({
        content: '用户认证信息失效，请重新登录!',
        duration: 1.5,
      })
      navigate('/login')
    }
    if (token && isExist) {
      if (location.pathname == '/' || location.pathname == '/login') {
        navigate('/')
      } else {
        navigate(location.pathname)
      }
    }
  }, [token, location.pathname])
  return children
}

export default ProtectedRoute
