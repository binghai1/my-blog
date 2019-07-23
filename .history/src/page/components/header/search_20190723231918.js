import  React,{Fragment} from 'react'
import {Input,Icon} from 'antd'

const Search=props=>{
    return (
        <div >
            <Icon type='search'/>
            <Input placeholder="搜索文章" onChange={(value)=>props.handleClick(value)} style={{width:200}}/>
        </Fragment>
    )
}
export default Search