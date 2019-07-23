
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Input,Button} from 'antd'
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
        <Row type="flex" >
            <Col span={3} >   
                <div>logo</div>
            </Col>
            <Col span={21}>
                <div className="search-bar">
                    <Input.Search 
                    onSearch={props.handleInput}
                    >
                    </Input.Search>
                </div>
                <div className="btn-group">
                    <Button type="primary" size="small">登陆</Button>
                    <Button size="small">注册</Button>
                </div>
                <div className="menu-bar">
                   <Nav/>
                </div>
                
            </Col>
        </Row>
    </div>
}
export default Head