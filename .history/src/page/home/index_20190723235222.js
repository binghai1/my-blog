import React,{Component} from 'react';
import Header from '../components/header'
import {Layout,Row,Col} from 'antd'
import './index.less'
const {  Footer } = Layout;
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
                <Row>
                    <Col span={4}></Col>
                    <Col span={20}></Col>
                </Row>
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home