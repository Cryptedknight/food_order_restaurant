import React from 'react';
import { Menu, Icon } from 'antd';
import style from './style';


const Navbar = props => (
    <Menu
    theme="light"
    mode="vertical"
    style={style.header}
    >
        <Menu.Item key="1">
            <Icon type="book" style={style.icon}/>
            <span>Your Restaurants</span>
        </Menu.Item>
            <Menu.Item key="2">
            <Icon type="team" style={style.icon}/><span>Manage Staff</span>
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="reconciliation" style={style.icon}/>
            <span>View Kitchen</span>
        </Menu.Item>
        <Menu.Item key="4">
            <Icon type="database" style={style.icon}/>
            <span>Inventory</span>
        </Menu.Item>
    </Menu>
)



export default Navbar;