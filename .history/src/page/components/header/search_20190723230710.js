import  React from 'react'
import {Input,Icon,Row,Col} from 'antd'

const Search=props=>{
    return (
        <Row>
            <Col>
            <Icon type='search'/>
            <Input onChange={(value)=>props.handleClick(value)} style={{width:}}/>
            </Col>
        </Row>
    )
}
export default Search