import { Suspense } from 'react'
import { routes } from './router'
import { useRoutes } from 'react-router'
import { Spin } from 'antd'
import './App.css'

const App = () => {
  const element = useRoutes(routes)
  return <Suspense fallback={<Spin></Spin>}>{element}</Suspense>
}

export default App
