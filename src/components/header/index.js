import React,{useState}  from 'react';
import {Row,Col,Button,Layout,Avatar,Menu,Dropdown} from 'antd'
import Search from './search'
import Nav from './nav'
import './index.less'
import Login from '@/page/login'
import Register from '@/page/login/register'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from '@/store/actionCreators'
import AuthorAvatar from '../authorAvatar'
import DropDownNav from './dropDownNav'
const {Header} = Layout

const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const Head=(props)=>{
    const [key,setKey] = useState('')
    const {username,authorized,setAuthorization,history,role}=props
    const handleSearchClick=()=>{
        history.push(`/?q=${key}`)
    }
    const handleChange=(e)=>{
        setKey(e.target.value)
    }
    const {showModal,showRegisterModal,width}=props
    
    const onClick=({key})=>{
        switch(key){
            case "2" : {
                localStorage.removeItem('token')
                setAuthorization(false)
                history.push("/")
            }break;
            default :;
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
            <Col {...siderLayout} >   
                <div className="logo"><i className="iconfont iconkeai" style={{color:"#1296db",fontSize:"25px",marginRight:"10px"}}></i>
                <h1 style={{fontSize:"24px"}}>海</h1></div>
            </Col>
            <Col {...contentLayout}>
                <div className="search-bar">
                    <Search  onClick={handleSearchClick} onChange={handleChange}/>
                </div>
            {width<738&&<span className="phone-title" ><i className="iconfont iconkeai" />海的博客</span>}

           {
               authorized?(
                <div className="user-avatar" >
               
                {
                    role==="管理员"?
                <Dropdown placement="bottomCenter" overlay={renderAvatarDropdownMenu} trigger={['click', 'hover']}>
                   <AuthorAvatar className="user-avatar" size="large"/>
                </Dropdown>
                   : 
                   <Dropdown placement="bottomCenter" overlay={renderAvatarDropdownMenu} trigger={['click', 'hover']}>
                    <Avatar  style={{backgroundColor:"#52c41a"} }
                        size="large">{username}</Avatar>  
                     </Dropdown>
                }                
               
               </div>):
               ( <div className="btn-group" style={{marginRight:40}}>
                <Button ghost type="primary" style={{marginRight:20}} size="small"
                onClick={()=>showModal(true)}>登陆</Button>

                <Button ghost type="danger" size="small" onClick={()=>showRegisterModal(true)}>注册</Button>
                </div>)
                    
           }
                <div className="menu-bar">
                   {width>738 ? <Nav/> : <DropDownNav/>}
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
        role:state.user.role,
        width:state.model.width
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