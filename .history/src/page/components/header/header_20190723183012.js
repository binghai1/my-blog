
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Input,Button,Menu, Icon} from 'antd'
import Nav from './nav'
import './nav.less'
const { SubMenu } = Menu;
const Nav=(props)=>{
    console.log(this)
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    useEffect(()=>{

    })
    return <div >
        <Row type="flex" align="center">
            <Col span={3} >   
                <div>logo</div>
            </Col>
            <Col span={21}>
                <div class="search-bar">
                    <Input.Search 
                    onSearch={props.handleInput}
                    >
                    </Input.Search>
                </div>
                <div class="btn-group">
                    <Button type="primary">登陆</Button>
                    <Button>注册</Button>
                </div>
                <div class="menu-bar">
                   
                </div>
                
            </Col>
        </Row>
    </div>
}
export default Nav