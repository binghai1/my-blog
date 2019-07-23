import React,{Component} from 'react';
import Nav from '../components/nav'
import {Layout} from 'antd'
import 'index'
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component{
    constructor(){
        super()
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        return <div>
              <Layout className="app-container">
                <Header>
                    <Nav handleInput={(value)=>this.handleInput(value)}/>
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home