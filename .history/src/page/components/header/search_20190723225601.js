import  React,{Fragment} from 'react'
import {Input,Icon} from 'antd'

const Search=props=>{
    return (
        <Fragment>
            <Icon type='search'/>
            <Input onChange={(value)=>props.handleClick(value)}/>
        </Fragment>
    )
}
export default Search