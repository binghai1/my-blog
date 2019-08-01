import React,{Component} from 'react';
import {Button,Divider} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import {IconText,IconTag} from '@/components/iconEnhance'
import CommnetList from './comment'
import './index.less'
import {findArticlesByIdUrl} from "@/util/interfaces"
import axios from 'axios'
import { connect } from 'react-redux';
@withRouter

class Article extends Component{
    constructor(props){
        super(props)
        this.state={
            listItem:[]
        }
    }
    async componentDidMount(){
        const {match} = this.props
        let id=match.params.id
        let res= await axios.get(findArticlesByIdUrl(id))
        console.log(res,id,555)
        this.setState({listItem:res.data.data})
    }
    render(){
       const {listItem} = this.state
        return <div className="article-wrapper">
            <h4>{listItem.title}</h4>
            <div>
                <IconText type="code" text=" Posted on"/>
                <Divider type="verticle"/>
                <IconTag more="a" type="tag" text={listItem.tags||[]}/>
            </div>
            <Divider />
            <div dangerouslySetInnerHTML = {{ __html: listItem.content }} />
            <ul className="main-ls">
                <li><Link to="#">如何用 es6+ 写出优雅的 js 代码</Link></li>
            </ul>
            <CommnetList/>
        </div>
    }
}

export default Article