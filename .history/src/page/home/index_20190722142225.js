import React,{Component} from 'react';
import Nav from '../components/nav'
import {Layout} from 'antd'
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
              <Layout>
      <Header>
        <Nav handleInput={(value)=>this.handleInput(value)}/>
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