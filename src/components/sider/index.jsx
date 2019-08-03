import React,{PureComponent} from 'react'
import {Icon,Divider,Tag,Badge} from 'antd'
import AuthorAvatar from '../authorAvatar'
import './index.less'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const colorList=['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple'];
@connect((state)=>({
    tags:state.model.tags,
}))
@withRouter
class Sider extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    onClick=(obj)=>{
        this.props.history.push(`/tags/${obj.id}/${obj.name}`)
    }
    render(){
        const {tags} = this.props
        return <div className='sider-wrapper'>
            <AuthorAvatar  width={133} height={133}/>
            {/* <h2>海</h2> */}
            <p style={{marginTop:"20px"}}>前端打砸人员,略微代码洁癖</p>
            <ul className="social">
                <li>
                    <Icon type="github"></Icon>
                    <a href="https://github.com/binghai1">github</a>
                </li>
                {/* <li>
                    <i className="iconfont iconjuejin"></i>
                    <Link to="/">juejin</Link>
                </li> */}
            </ul>
            {/* <Divider orientation="left">热门文章</Divider>
            <ul className="hot">
                <li><Link to="/">如何用 es6+ 写出优雅的 js 代码</Link></li>
            </ul> */}
            <Divider orientation="left">标签</Divider>
            <div className="tag-group">
                {
                    tags.map((item,index)=>(
                        <Badge key={item._id} count={item.articlesCount||0}>
                        <Tag onClick={()=>this.onClick({id:item._id,name:item.title})} key={item._id} color={colorList[index%7]}>{item.title}</Tag>
                        </Badge>)
                    )
                }
                 {/* <Tag color="magenta">magenta</Tag>
                 <Tag color="magenta">magenta</Tag>
                 <Tag color="magenta">magenta</Tag> */}
            </div>
        </div>
    }
}
export default Sider