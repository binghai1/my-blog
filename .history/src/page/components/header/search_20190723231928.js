import  React,from 'react'
import {Input,Icon} from 'antd'

const Search=props=>{
    return (
        <div className >
            <Icon type='search'/>
            <Input placeholder="搜索文章" onChange={(value)=>props.handleClick(value)} style={{width:200}}/>
        </div>
    )
}
export default Search