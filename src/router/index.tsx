import React from 'react'
import { RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const User = React.lazy(() => import('@/pages/User'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [{ path: 'user', element: <User /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
]
export { routes }
