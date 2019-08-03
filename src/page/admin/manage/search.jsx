import React,{Component} from 'react'
import { Form,  Input, Button,Select,Checkbox } from 'antd';
import PropTypes from 'prop-types'
const {Option} = Select
class Search extends Component{
    state={

    }
    static propTypes={
      handleSearchClick:PropTypes.func.isRequired,
      tags:PropTypes.array.isRequired
    }
    handleClick(){
      const value=this.props.form.getFieldsValue()
      this.props.handleSearchClick(value)
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const {tags} = this.props
        return (<Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item label="标题">
            {getFieldDecorator('title')(
            <Input
              placeholder="title"
            />,
          )}
            </Form.Item>
            <Form.Item label="标签">
            {getFieldDecorator('tag')(
            <Select style={{ width: 200 }} placeholder="Please select a tag" hasFeedback >
              {
                tags.map(item=>(
                  <Option key={item._id} value={item._id}>{item.title}</Option>
                ))
              }
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