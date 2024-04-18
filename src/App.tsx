import { Suspense } from 'react'
import { RouteConfig, routers } from './router'
import { Spin } from 'antd'
import './App.css'
import { Route, Routes } from 'react-router'
import ProtectedRoute from './router/ProtectedRoute'

const App = () => {
  const renderRoutes = (list: RouteConfig[]) => {
    return list.map((item: RouteConfig) => {
      return (
        <Route
          key={item.path}
          path={item.path}
          element={
            <ProtectedRoute key={item.path} auth={item.auth}>
              {item.element}
            </ProtectedRoute>
          }
        >
          {item?.children && renderRoutes(item.children)}
        </Route>
      )
    })
  }

  return (
    <Suspense fallback={<Spin></Spin>}>
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  )
}

export default App
