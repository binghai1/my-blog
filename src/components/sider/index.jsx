import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon,Avatar,Divider,Tag} from 'antd'
import avatar from '@/assets/images/author_avatar.jpeg'
import './index.less'
const colorList=['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple'];
class Sider extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className='sider-wrapper'>
            <Avatar src={avatar} shape="circle" style={{width:133,height:133}}/>
            <h2>海大大</h2>
            <p>前端打砸人员,略微代码洁癖</p>
            <ul className="social">
                <li>
                    <Icon type="github"></Icon>
                    <Link to="/">github</Link>
                </li>
                <li>
                    <i className="iconfont iconjuejin"></i>
                    <Link to="/">juejin</Link>
                </li>
            </ul>
            <Divider orientation="left">热门文章</Divider>
            <ul className="hot">
                <li><Link to="/">如何用 es6+ 写出优雅的 js 代码</Link></li>
            </ul>
            <Divider orientation="left">标签</Divider>
            <div className="tag-group">
                 <Tag color="magenta">magenta</Tag>
                 <Tag color="magenta">magenta</Tag>
                 <Tag color="magenta">magenta</Tag>
                 <Tag color="magenta">magenta</Tag>
            </div>
        </div>
    }
}
export default Sider