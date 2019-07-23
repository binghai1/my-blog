import React from 'react'
import fileType from 'prop-type'
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
        text:"其他",
        path:'/other'
    },
    {
        icon:'user',
        text:"我的",
        path:'/mine'
    }
]
const nav=(props)=>{
    const renderItem=()=>{
        return (
            <Menu.Item className="nav">
                        <NavLink to='/home'>首页</NavLink>
            </Menu.Item>
        )
    }
    return <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        
    </Menu>
}
export default  nav