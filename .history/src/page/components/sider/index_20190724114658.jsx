import React,{Compoent} from 'react'
import {Icon,Avatar} from 'antd'
const contact=[
    {
        icon:'github',
        title:'github'
    },
    {
        icon:''
    }
]
class Sider extends Compoent {
    constructor(){

    }
    render(){
        return <div className='sider-wrapper'>
            <Avatar src="../../../assets/images/avatar.jpeg" shape="circle" />
            <h2>海大大</h2>
            <p>前端打砸人员,略微代码洁癖</p>
            <ul>
                <li><svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xxx"></use>
                    </svg>
                </li>
            </ul>
        </div>
    }
}