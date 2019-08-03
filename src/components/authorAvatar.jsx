import React from 'react'
import avatar from '@/assets/images/author_avatar.jpeg'
import {Avatar} from 'antd'
const AuthorAvatar=({width,height,...rest})=>{

    return  <Avatar src={avatar} {...rest} shape="circle" style={{width,height}} />

}
export default AuthorAvatar