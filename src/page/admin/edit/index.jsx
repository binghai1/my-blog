import React,{useState,useEffect,useRef,memo} from 'react'
import {message,Input,Form,Button} from 'antd'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import TagGroup from './tagGroup'
import {translateMarkdown} from '@/util'
import {getTagsUrl,createArticleUrl} from '@/util/interfaces'
import {connect} from 'react-redux'
import axios from 'axios'


const Edit = memo((props)=>{
    const {selectTags} = props
    const [isEdit,setIsEdit]=useState(false)
    const [tags,setTags]=useState([
        
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
    useEffect( ()=>{
        axios.get(getTagsUrl).then((res)=>{
            setTags(res.data.data)
        })
       },[]);
    const handleForm=()=>{
         props.form.validateFields((err,value)=>{
            if(!err){
                let data={
                    title:value.title,
                    content:markdown.current.value(),
                    tags:selectTags
                }
                axios.post(createArticleUrl,data)
                console.log(data,"提交表单数据")
                message.success("创建文章成功")
            }
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

export default connect(
    (state)=>({
        selectTags:state.model.selectTags
      }),()=>({
        
      })
)(Form.create()(Edit))