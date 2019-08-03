import React,{Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const menuList=[
    {
    icon:'home',
    text:"首页",
    path:"/admin/home"

    },
    {
        icon:"edit",
        text:"文章管理",
        path:"/admin/articles",
        children:[
            {
                icon:"edit",
                path:"/admin/articles/edit",
                text:"写文章",
            },
            {
                icon:"folder",
                path:"/admin/articles/manage",
                text:"管理文章",
            }
        ]
    },
    {
      icon:'user',
      text:"用户",
      path:"/admin/users/manage"
    }
]

@withRouter
@connect((state)=>({user:state.user}),
 
  )
class Admin extends Component {
  state = {
    collapsed: false,
    openKeys:[],
  };
  async componentWillMount(){
    const {user}=this.props
    let {location,history} = this.props
    if(!user||user.role!=="管理员"){
      history.push('/')
    }
    const pathname=location.pathname;
    const index=pathname.lastIndexOf('/');
    const openKeys=[pathname.slice(0,index)];
    this.setState({openKeys})
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  renderMenu(data){
    return data.map((item)=>(
        item.children?<SubMenu key={item.path}  title={
            <span>
              <Icon type={item.icon}/>
              <span>{item.text}</span>
            </span>
          }>
          {this.renderMenu(item.children)}
          </SubMenu>
        :<Menu.Item key={item.path}>
            <Link to={item.path}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
            </Link>
        </Menu.Item>
    ))
  }
  render() {
    return (
      <Layout className="admin-Container">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu  theme="dark" mode="inline" defaultOpenKeys={this.state.openKeys} defaultSelectedKeys={[this.props.location.pathname]}>
                {this.renderMenu(menuList)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Content className="right-main-wrapper"
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              
            }}
          >
          {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default  Admin