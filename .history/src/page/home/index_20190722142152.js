import React,{Component} from 'react';
import Nav from '../components/nav'
import {Row,Col} from 'antd'
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
            <Nav handleInput={(value)=>this.handleInput(value)}/>
      <Header>Header</Header>
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