import { Modal, Button,Form,Input,Icon,Checkbox,message,Tooltip} from 'antd';
import React ,{Component} from 'react'
import { connect } from 'react-redux';
import './index.less'
import * as actionCreators from '@/store/actionCreators'
@connect((state)=>({visible:state.model.showRegister}),
(dispatch)=>({
    showModal(flag){
        dispatch(actionCreators.getRegisterModel(flag))
    }
}))
class Register extends Component {
  state = {
    confirmLoading: false,
    confirmDirty: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
                message.success('register successful');
            });
          }, 2000);
        console.log('Received values of form: ', values);
      }
    });
}

  render() {
    const { visible, showModal } = this.props;
    const {confirmLoading} =this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
    };
    return (
      <div className="login-wrapper">
        <Modal
          title="注册"
          visible={visible}
          onCancel={()=>showModal(false)}
          footer={null}
        >
         <Form {...formItemLayout} onSubmit={this.handleSubmit} >
         <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          <Button  style={{marginTop:20}} loading={confirmLoading} type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Register)