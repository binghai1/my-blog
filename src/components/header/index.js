
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Button,Layout,Avatar,Menu,Dropdown} from 'antd'
import Search from './search'
import Nav from './nav'
import './index.less'
import Login from '@/page/login'
import Register from '@/page/login/register'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from '@/store/actionCreators'
const {Header} = Layout
const Head=(props)=>{
    // const [current,setCurrent] = useState('')
    const {username,authorized,setAuthorization,history}=props
    const handleClick=useCallback((e)=>{
    })
    const {showModal,showRegisterModal}=props
    useEffect(()=>{
      
    },[])
    const onClick=({key})=>{
        switch(key){
            case "2" : {
                localStorage.removeItem('token')
                setAuthorization(false)
                history.push("/")
            }break;
        }
    }
    const renderAvatarDropdownMenu=(
        <Menu onClick={onClick}>
        <Menu.Item key="1">修改账户信息</Menu.Item>
        <Menu.Item key="2">退出登陆</Menu.Item>
        </Menu>
    )
    
    return <Header className="header-container" >
        <Row  >
            <Col span={5} >   
                <div className="logo">logo</div>
            </Col>
            <Col span={19}>
                <div className="search-bar">
                    <Search handleClick={handleClick}/>
                </div>
           {
               authorized?(<div className="user-avatar" >
                    <Dropdown placement="bottomCenter" overlay={renderAvatarDropdownMenu} trigger={['click', 'hover']}>
                    <Avatar 
                        style={{backgroundColor:"#52c41a" ,} }
                            size="large">{username}</Avatar>    
                     </Dropdown>
                   </div>):
               ( <div className="btn-group" style={{marginRight:40}}>
                <Button ghost type="primary" style={{marginRight:20}} size="small"
                onClick={()=>showModal(true)}>登陆</Button>

                <Button ghost type="danger" size="small" onClick={()=>showRegisterModal(true)}>注册</Button>
                </div>)
                    
           }
                <div className="menu-bar">
                   <Nav/>
                </div>
                
            </Col>
            <Login/>
            <Register/>
        </Row>
    </Header>
}
export default connect((state)=>(
    {
        authorized:state.user.isAuthorization,
        username:state.user.username,
        
    })
    ,(dispatch)=>({
    showModal(flag){
        dispatch(actionCreators.getModel(flag))
    },
    showRegisterModal(flag){
        dispatch(actionCreators.getRegisterModel(flag))
    },
    setAuthorization(flag){
        dispatch(actionCreators.setAuthorization(flag))
    } 
}))(withRouter(Head))