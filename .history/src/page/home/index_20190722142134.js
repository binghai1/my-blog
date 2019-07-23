import React,{Component} from 'react';
import Header from '../components/nav'
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
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
            <Header handleInput={(value)=>this.handleInput(value)}/>
        </div>
    }
}

export default Home