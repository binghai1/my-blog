import React,{Compoent} from 'react'
import {Link} from 'react-router-dom'
import {Icon,Avatar} from 'antd'

class Sider extends Compoent {
    constructor(){

    }
    render(){
        return <div className='sider-wrapper'>
            <Avatar src="../../../assets/images/avatar.jpeg" shape="circle" />
            <h2>海大大</h2>
            <p>前端打砸人员,略微代码洁癖</p>
            <ul>
                <li>
                    <i class="iconfont icon-iconjuejin"></i>
                    <Link></Link>
                </li>
                <li>
                    <i class="iconfont icon-iconjuejin"></i>
                    <Link>juejin</Link>
                </li>
            </ul>
        </div>
    }
}