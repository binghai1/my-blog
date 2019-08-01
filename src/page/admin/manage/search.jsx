import React,{Component} from 'react'
import { Form,  Input, Button,Select,Checkbox } from 'antd';
const {Option} = Select
class Search extends Component{
    state={

    }
    handleClick(){
       console.log( this.props.form.getFieldsValue())
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return (<Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item label="标题">
            {getFieldDecorator('title')(
            <Input
              placeholder="title"
            />,
          )}
            </Form.Item>
            <Form.Item label="标签">
            {getFieldDecorator('tags')(
            <Select style={{ width: 200 }} placeholder="Please select a tag" hasFeedback >
              <Option value="female">female</Option>
              <Option value="male">male</Option>
            </Select>,
          )}
            </Form.Item>
            <Form.Item label="置顶文章">
            {getFieldDecorator('top')(
            <Checkbox ></Checkbox>,
          )}
            </Form.Item>
            <Form.Item>
            <Button type="primary"  onClick={()=>this.handleClick()}>检索</Button>
             </Form.Item>
        </Form>
        
        )
    }
}
export default Form.create()(Search);