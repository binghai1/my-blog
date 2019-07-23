import React from 'react'
const navList=[
    {
        icon:'home',
        text:"首页",
        path:'/'
    },
    {
        icon:'edit',
        text:"归档",
        path:'/'
    },
    {
        icon:'其他',
        text:"首页",
        path:'/'
    },
    {
        icon:'home',
        text:"首页",
        path:'/'
    }
]
const nav=()=>{

    return <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    <Menu.Item className="nav">
        <NavLink to='/home'>首页</NavLink>
    </Menu.Item>
    <Menu.Item className="nav">
        <NavLink to='/collect'>归档</NavLink>
    </Menu.Item>
    <Menu.Item className="nav">
        <NavLink to='/other'>其他</NavLink>
    </Menu.Item>
    </Menu>
}
export default  nav