import React,{Component} from 'react';
import Header from '@/components/header'
import {Layout,Row,Col,BackTop} from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
import Sider from '@/components/sider'
const {  Footer } = Layout;
@withRouter
class Home extends Component{
    constructor(){
        super()
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        return <div className="home-container">
              <Layout >
                <Header handleInput={(value)=>this.handleInput(value)}/>
                <Row className="main">
                    <Col span={5}><Sider/></Col>
                    <Col className="right-wrapper" span={19}>{this.props.children}</Col>
                </Row>
                <BackTop visibilityHeight={1} target={() => document.querySelector('.right-wrapper')} />
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home