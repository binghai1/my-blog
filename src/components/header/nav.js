import React from 'react'
import {withRouter,NavLink,} from 'react-router-dom'
import {Menu,Icon} from 'antd'
import {navList} from '@/store/constant'
const Nav=(props)=>{
    
      return  <Menu  selectedKeys={[props.location.pathname]} mode="horizontal">
           {navList.map((item)=>(
            <Menu.Item className="nav" key={item.path}>
                <NavLink to={item.path}>
                    <Icon type={item.icon}/>
                    {item.text}
                </NavLink>
             </Menu.Item>
            ))}
        </Menu>
  
}
export default  withRouter(Nav)