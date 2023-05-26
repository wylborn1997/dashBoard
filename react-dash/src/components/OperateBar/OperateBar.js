import { FileOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react'
import menu from '../../tools/barMenu'
const {  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
function getItems (role) {
  return menu.map(item => {
    if (item.roles.indexOf(role) > -1) {
      return getItem(item.alias, item.id, item.icon)
   }
  })
}

function OprateBar ({collapsed, setCollapsed, role}) {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <div className="demo-logo-vertical" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={getItems(role)} />
  </Sider>
  )
  
}

export default OprateBar