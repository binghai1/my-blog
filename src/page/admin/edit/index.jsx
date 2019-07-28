import React,{useState,useEffect,useRef,memo} from 'react'
import {message,Input,Form,Button} from 'antd'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import TagGroup from './tagGroup'
import {translateMarkdown} from '@/util'

const Edit = memo((props)=>{
    const [isEdit,setIsEdit]=useState(false)
    const [tags,setTags]=useState([
        'javascript',
        'es6',
        'react'
    ])
    let markdown=useRef()

    useEffect(()=>{
        markdown.current = new SimpleMDE({ 
        element: document.getElementById("MD"),
        autofocus: true,
        autosave: true,
        previewRender: translateMarkdown
       });
    },[])
    const handleForm=()=>{
         props.form.validateFields((err,value)=>{
            if(err){
                message.info('请验证输入数据');
            }
            console.log(value)
        })
    }
    const handleChange=(e)=>{
        console.log(e)
    }
    // const onChangeTags=(data)=>{
    //     console.log(data)
    //     setTags(data)
    // }
    const {getFieldDecorator} =props.form
    return (
        <div className="edit-wrapper">
         <Form layout="inline">
            <Form.Item label="标题">
            {getFieldDecorator('title', {
                rules: [
                {
                    required: true,
                    message: 'Please input your title',
                },
                ],
            })(<Input placeholder="Please input your title" />)}
            </Form.Item>
            </Form >
            <TagGroup  tags={tags}/>
            <textarea id="MD" ></textarea>
            <Button type="primary" onClick={handleForm}>创建</Button>
        </div>
    )
})
export default Form.create()(Edit)