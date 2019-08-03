import React from 'react'
import {withRouter,NavLink,} from 'react-router-dom'
import {Menu,Icon,Dropdown} from 'antd'
import {navList} from '@/store/constant'

const Nav=(props)=>{
    const renderMenu=()=>(
        <Menu  selectedKeys={[props.location.pathname]}  style={{width:80}}>
           {navList.map((item)=>(
            <Menu.Item  key={item.path}>
                <NavLink to={item.path}>
                    <Icon style={{marginRight:10}} type={item.icon}/>
                    {item.text}
                </NavLink>
             </Menu.Item>
            ))}
        </Menu>
    )
    return <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={renderMenu}>
    {/* <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={<DropdownMenu navList={navList} />}> */}
    <Icon type="menu-o" className="nav-phone-icon" />
  </Dropdown>
}
export default  withRouter(Nav)