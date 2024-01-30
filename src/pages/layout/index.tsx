import { Layout, Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'

export default function index() {
  const { Header, Footer, Content } = Layout
  const items: MenuProps['items'] = [
    {
      label: '主页',
      key: 'home'
    },
    {
      label: '归档',
      key: 'place'
    },
    {
      label: '标签',
      key: 'tag'
    },
    {
      label: '分类',
      key: 'category'
    },
    {
      label: '关于',
      key: 'about'
    }
  ]
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <Layout>
      <Header className="header">
        <div>Header</div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
      <Content className="content">
        <Outlet></Outlet>
      </Content>
      <Footer className="footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
