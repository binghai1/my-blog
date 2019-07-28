import { Modal, Button,Form,Input,Icon,Checkbox,message } from 'antd';
import React ,{Component} from 'react'
import { connect } from 'react-redux';
import './index.less'
import * as actionCreators from '@/store/actionCreators'
@connect((state)=>({visible:state.model.showLogin}),
(dispatch)=>({
    showModal(flag){
        dispatch(actionCreators.getModel(flag))
    },
    showRegisterModel(flag){
        dispatch(actionCreators.getRegisterModel(flag))
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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
            confirmLoading: true,
          });
          setTimeout(() => {
            this.setState({
              confirmLoading: false,
            },()=>{
                this.props.showModal(false)
                message.success('login successful');
            });
          }, 2000);
        console.log('Received values of form: ', values);
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
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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