import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon,Avatar} from 'antd'
import avatar from '@/assets/images/author_avatar.png'
class Sider extends Component {
    constructor(){
        super()
    }
    render(){
        return <div className='sider-wrapper'>
            <Avatar src={avatar} shape="circle" />
            <h2>海大大</h2>
            <p>前端打砸人员,略微代码洁癖</p>
            <ul>
                <li>
                    <Icon type="github"></Icon>
                    <Link>github</Link>
                </li>
                <li>
                    <i class="iconfont icon-iconjuejin"></i>
                    <Link>juejin</Link>
                </li>
            </ul>
        </div>
    }
}
export default Sider