import React from 'react'
const navList=[
    {
        icon:'home',
        text:"首页",
        path:'/'
    },
    {
        icon:'floder',
        text:"归档",
        path:'/category'
    },
    {
        icon:'coffee',
        text:"coffee",
        path:'/other'
    },
    {
        icon:'user',
        text:"我的",
        path:'/mine'
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