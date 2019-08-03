import React,{PureComponent} from 'react';
import Header from '@/components/header'
import {Layout,Row,Col,BackTop} from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
import Sider from '@/components/sider'
import {connect} from 'react-redux'
import LoadingAct from '@/components/loading'
import {getTagsUrl} from '../../util/interfaces'
import * as actionCreators from '@/store/actionCreators'
import axios from 'axios'

const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

@withRouter
@connect((state)=>({
    list:state.model.list
}),(dispatch)=>({
    saveTags(tags){
    dispatch(actionCreators.saveTags(tags))
    }
}))

class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        const {saveTags}=this.props
        axios.get(getTagsUrl).then((res)=>{
            saveTags(res.data.data)
        })
    }
   
    render(){
        const {list } = this.props
        return <div className="home-container">
              <Layout >
                <Header />
                <Row className="main">
                    <Col {...siderLayout} ><Sider/></Col>
                    <Col {...contentLayout } className="right-wrapper" >
                         {list?this.props.children:<LoadingAct/>}
                    </Col>
                </Row>
                <BackTop visibilityHeight={1} target={() => document.querySelector('.right-wrapper')} />
                {/* <Footer>Footer</Footer> */}
                </Layout>
        </div>
    }
}

export default Home