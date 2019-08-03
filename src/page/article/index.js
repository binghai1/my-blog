import React,{PureComponent} from 'react';
import {Button,Divider,} from 'antd'
import {withRouter} from 'react-router-dom'
import {IconText,IconTag} from '@/components/iconEnhance'
import ArticleComment from './comment/index'
import './index.less'
import {findArticlesByIdUrl,findCommentsURl} from "@/util/interfaces"
import axios from 'axios'
import { connect } from 'react-redux';
import Navigation from './navigation'
import {translateMarkdown} from '@/util'
@withRouter
@connect((state)=>({width:state.model.width}))
class Article extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            listItem:[],
            id:"",
            commentList:[],
            showSide:this.props.width>738
        }
    }
    async componentWillMount(){
        const {match} = this.props
        let id=match.params.id
        let res= await axios.get(findArticlesByIdUrl(id))
        let commentRes= await axios.get(findCommentsURl(id))
        res.data.data.content=translateMarkdown(res.data.data.content)
        this.setState({listItem:res.data.data,id,commentList:commentRes.data.data})
    }
    setCommentList=(commentList)=>{
        this.setState({commentList})
    }
    onClick=()=>{
        this.setState({showSide:!this.state.showSide})
    }
    render(){
       
       const {listItem,id,commentList,showSide} = this.state
       const {width} =this.props
        return <div className="article-wrapper">
            <div className="title-wrapper">
                <h4>{listItem.title}</h4>
                <div>
                    <IconText type="code" text=" Posted on"/>
                    <Divider type="verticle"/>
                    <IconTag more="a" type="tag" text={listItem.tags||[]}/>
                </div>
            </div>
            <Divider />
            <div dangerouslySetInnerHTML = {{ __html: listItem.content }} />
            {width<738 && <Button onClick={this.onClick}
            style={{ position:"fixed",top: "104px",right:"10px",zIndex:11 }}
            shape="circle"   icon="minus-square"    />
             }
            {showSide && <div className="side" ><Navigation  content={listItem.content}/></div>}
            <ArticleComment articleId={id} commentList={commentList} setCommentList={this.setCommentList}/>
        </div>
    }
}

export default Article