
import React  from 'react';
import {Row,Col,Input,Button,Menu, Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import './header.less'
const { SubMenu } = Menu;
const Header=(props)=>{
    return <div className='header'>
        <Row >
            <Col span={3} offset={3}>logo</Col>
            <Col span={6}>
                <Input.Search 
                onSearch={value => props.handleInput(value)}
                >
                </Input.Search>
            </Col>
            <Col span={12}>
                <Row  >
                    <Col span="15">
                        <Menu onClick>
                            <Menu.Item></Menu.Item>
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