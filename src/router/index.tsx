import React from 'react'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import User from '@/pages/User'

/** 路由懒加载 */
// const Login = React.lazy(() => import('@/pages/Login'))
// const Layout = React.lazy(() => import('@/pages/Layout'))
// const Home = React.lazy(() => import('@/pages/Home'))
// const User = React.lazy(() => import('@/pages/User'))

/** 路由定义 */
export interface RouteConfig {
  path: string
  element: React.ReactNode
  auth: boolean
  children?: RouteConfig[]
}

export const routers: RouteConfig[] = [
  { path: '/login', element: <Login />, auth: false },
  {
    path: '/',
    element: <Layout />,
    auth: true,
    children: [
      { path: 'home', element: <Home />, auth: true },
      { path: 'user', element: <User />, auth: true },
    ],
  },
]
