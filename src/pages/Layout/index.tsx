import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Layout as AntdLayout, Menu, Button, theme } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import './style.less'
import { Outlet } from 'react-router'

const { Header, Sider, Content } = AntdLayout
//component
const Layout: React.FC = () => {
  //hooks
  const navigate = useNavigate()
  //state
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <AntdLayout className="layout">
      <Sider trigger={null} width={240} collapsible collapsed={collapsed}>
        <div/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '首页',
              onClick: () => {
                navigate('/home')
              },
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '用户管理',
              onClick: () => {
                navigate('/user')
              },
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '系统设置',
            },
          ]}
        />
      </Sider>
      <AntdLayout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}
export default Layout
