
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Button,Layout} from 'antd'
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
    return <Header className="header-container" >
        <Row  >
            <Col span={4} >   
                <div>logo</div>
            </Col>
            <Col span={20}>
                <div className="search-bar">
                    <Search handleClick={handleClick}/>
                </div>
                <div className="btn-group">
                    <Button ghost type="primary" style={{marginRight:20}} size="small">登陆</Button>
                    <Button ghost type="danger" size="small">注册</Button>
                </div>
                <div className="menu-bar">
                   <Nav/>
                </div>
                
            </Col>
        </Row>
    </div>
}
export default Head