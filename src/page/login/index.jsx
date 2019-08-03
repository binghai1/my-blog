import { Modal, Button,Form,Input,Icon,Checkbox,message } from 'antd';
import React ,{Component} from 'react'
import { connect } from 'react-redux';
import './index.less'
import {getModel,getRegisterModel,setUser} from '@/store/actionCreators'
@connect((state)=>({visible:state.model.showLogin}),
(dispatch)=>({
    showModal(flag){
        dispatch(getModel(flag))
    },
    showRegisterModel(flag){
        dispatch(getRegisterModel(flag))
    },
    startLogin(data){
      return dispatch(setUser(data))
    }
}))

class Login extends Component {
  state = {
    confirmLoading: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.setState({
            confirmLoading: true,
        });
        let res=await this.props.startLogin(values)
        this.setState({
          confirmLoading: false,
        });
        if(!res)return
        this.props.showModal(false)
        message.success('login successful');
      }
    });
}
handleForgot=(e)=>{
    e.preventDefault()
}
handleRegister=(e)=>{
    e.preventDefault()
    this.props.showModal(false)
    this.props.showRegisterModel(true)
}
  render() {
    const { visible, showModal } = this.props;
    const {confirmLoading} =this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrapper">
        <Modal
          title="登陆"
          visible={visible}
          onCancel={()=>showModal(false)}
          footer={null}
        >
         <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{type: 'email', message: 'The input is not valid E-mail!'},{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="javascript;" onClick={this.handleForgot}>
            Forgot password
          </a>
          <Button loading={confirmLoading} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="javascript;"  onClick={this.handleRegister} style={{color:'#1890ff'}}>register now!</a>
        </Form.Item>
      </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Login)