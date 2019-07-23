import  React from 'react'
import {Input,Icon,Row,Col} from 'antd'

const Search=props=>{
    return (
        <Row>
            <Col>
            <Icon type='search'/>
            <Input placeholder onChange={(value)=>props.handleClick(value)} style={{width:200}}/>
            </Col>
        </Row>  
    )
}
export default Search