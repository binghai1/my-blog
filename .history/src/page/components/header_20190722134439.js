
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Input,Button,Menu, Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import './header.less'
const { SubMenu } = Menu;
const Header=(props)=>{
    console.log(this)
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    useEffect(()=>{

    })
    return <div className='header'>
        <Row >
            <Col span={3} offset={3}>logo</Col>
            <Col span={6}>
                <Input.Search 
                onSearch={props.handleInput}
                >
                </Input.Search>
            </Col>
            <Col span={12}>
                <Row  >
                    <Col span={15}>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item>
                              <NavLink to='/home'>首页</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={3} offset={3}><Button type="primary">登陆</Button></Col>
                    <Col span={3} type="primary"><Button>注册</Button></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Header