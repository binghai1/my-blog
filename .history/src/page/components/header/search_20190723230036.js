import  React,{Fragment} from 'react'
import {Input,Icon} from 'antd'

const Search=props=>{
    return (
        <Row>
            <Col>
            <Icon type='search'/>
            <Input onChange={(value)=>props.handleClick(value)}/>
            </Col>
        </Row>
    )
}
export default Search