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
        text:"其他",
        path:'/other'
    },
    {
        icon:'user',
        text:"我的",
        path:'/mine'
    }
]
const nav=()=>{
    const renderItem=()=>{
        return (

        )
    }
    return <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        
    </Menu>
}
export default  nav