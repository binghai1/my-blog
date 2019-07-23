
import React,{Component} from 'react';
import {Row,Col} from 'antd'
const Header=(props)=>{
    return <div class='header'>
        <Row >
            <Col span='6'></Col>
            <Col span='6'></Col>
            <Col span='12'>
                <Row>
                    <Col span="5"></Col>
                    <Col span="5"></Col>
                    <Col span="5"></Col>
                    <Col span="3" offset="3"></Col>
                    <Col span="3"></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Header