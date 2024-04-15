import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
export { routes }
