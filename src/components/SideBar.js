import React from 'react';
import { Icon, Layout, Menu } from 'antd';
import './SideBar.css'

class SideBar extends React.Component {

   render() {
      return (
         <Layout.Sider style={{ background: '#fff', margin: 5 }}>
            <div className="logo"/>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
               <Menu.Item key="1">
                  <Icon type="pie-chart"/>
                  <span>Option 1</span>
               </Menu.Item>
               <Menu.Item key="2">
                  <Icon type="desktop"/>
                  <span>Option 2</span>
               </Menu.Item>
               <Menu.Item key="9">
                  <Icon type="file"/>
                  <span>File</span>
               </Menu.Item>
            </Menu>
         </Layout.Sider>
      );
   }
}

export default SideBar;
