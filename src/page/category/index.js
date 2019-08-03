import React, { Component } from 'react'
import {Divider,Tag,Badge} from 'antd'
import './index.less'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const colorList=['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple'];
@withRouter
@connect((state)=>({
    tags:state.model.tags,
}))
class Category extends Component{
    onClick=(obj)=>{
        this.props.history.push(`/tags/${obj.id}/${obj.name}`)
    }
    render(){
        const {tags} = this.props
        return <div className="category-container">
        <Divider>标签分类</Divider>
        <div className="tag-group">
            {
                tags.map((item,index)=>(
                    <Badge key={item._id} count={item.articlesCount||0}>
                    <Tag onClick={()=>this.onClick({id:item._id,name:item.title})} key={item._id} color={colorList[index%7]}>{item.title}</Tag>
                    </Badge>)
                )
            }
        </div>
        </div>
    }
    
}
export default Category