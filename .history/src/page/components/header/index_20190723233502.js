
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Button} from 'antd'
import Search from './search'
import Nav from './nav'
import './index.less'
const Head=(props)=>{
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    useEffect(()=>{

    })
    return <div className="header-container" >
        <Row  >
            <Col span={4} >   
                <div>logo</div>
            </Col>
            
        </Row>
    </div>
}
export default Head