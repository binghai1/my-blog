import  React from 'react'
import {Input,Icon,Row,Col} from 'antd'

const Search=props=>{
    return (
        
            <Icon type='search'/>
            <Input placeholder="搜索文章" onChange={(value)=>props.handleClick(value)} style={{width:200}}/>
    )
}
export default Search