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
        console.log(this)
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        return <div className="home-container">
              <Layout >
                <Header handleInput={(value)=>this.handleInput(value)}/>
                <Row className="main-container">
                    <Col span={5}><Sider/></Col>
                    <Col span={19}>{this.props.children}</Col>
                </Row>
                <BackTop target={() => document.querySelector('.main-container')} />
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home