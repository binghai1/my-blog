import React,{Component} from 'react';
import {Button,Divider} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import {IconText,IconTag} from '@/components/iconEnhance'
import CommnetList from './comment'
import './index.less'
@withRouter
class Article extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.match.params.id)
        return <div className="article-wrapper">
            <h4>title</h4>
            <div>
                <IconText type="code" text=" Posted on"/>
                <Divider type="verticle"/>
                <IconTag type="tag" text={['222','333']}/>
            </div>
            <Divider />
            <ul className="main-ls">
                <li><Link to="#">如何用 es6+ 写出优雅的 js 代码</Link></li>
            </ul>
            <CommnetList/>
        </div>
    }
}

export default Article