import React from 'react';
import {Menu} from 'antd';


function AppHeader() {
    return (
        <div className = "container-fluid">
        <div className = "header">
        <div className= "logo">
        <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
     <Menu mode="horizontal" defaultSelectedKeys={[]}>
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.Item key="About">About</Menu.Item>
        <Menu.Item key="Features">Features</Menu.Item>
        <Menu.Item key="How it Works">How it Works</Menu.Item>
        <Menu.Item key="Contact">Contact</Menu.Item>
      </Menu>

        </div>
        </div>
    )
}

export default AppHeader;