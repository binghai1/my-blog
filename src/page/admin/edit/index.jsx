import React,{useState,useEffect,useRef,memo} from 'react'
import {message,Input,Form,Button} from 'antd'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import TagGroup from './tagGroup'
import {translateMarkdown} from '@/util'
import {getTagsUrl,createArticleUrl,findArticlesByIdUrl,updateArticlesUrl} from '@/util/interfaces'
import {connect} from 'react-redux'
import axios from 'axios'
import {setTags} from '@/store/actionCreators'
import queryString from 'query-string'

const Edit = memo((props)=>{
    const {selectTags,setSelectTags,location} = props
    const [article,setArticle]=useState("")
    const [isEditId,setEditId]=useState("")
    const [tags,setTags]=useState([ ])
    let markdown=useRef()

    useEffect(()=>{
        markdown.current = new SimpleMDE({ 
        element: document.getElementById("MD"),
        autofocus: true,
        autosave: true,
        previewRender: translateMarkdown
       });
       axios.get(getTagsUrl).then((res)=>{
        setTags(res.data.data)
        })
        let id=queryString.parse(location.search).id
        if(id){
          setEditId(id)
         axios.get(findArticlesByIdUrl(id)).then((res)=>{
            let data=res.data.data
            setArticle(data)
            setSelectTags(data.tags.map(item=>item._id))
            markdown.current.value(data.content)
        })
      }
    },[])
    const handleFormUpdate=()=>{
        props.form.validateFields(async(err,value)=>{
            if(!err){
                let data={
                    title:value.title,
                    content:markdown.current.value(),
                    tags:selectTags
                }
                let res=await axios.patch(updateArticlesUrl(isEditId),data)
                if(res.data.data){
                    message.success("更新文章成功")
                }else{
                    message.warning("更新文章失败")
                }
            }
        })
    }
    const handleForm=()=>{
         props.form.validateFields(async (err,value)=>{
            if(!err){
                let data={
                    title:value.title,
                    content:markdown.current.value(),
                    tags:selectTags
                }
                let res=await axios.post(createArticleUrl,data)
                if(res.data.data){
                    message.success("创建文章成功")
                }else{
                    message.warning("创建文章失败")
                }
            }
        })
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
                initialValue:article.title,
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
            <textarea  id="MD" ></textarea>
            { isEditId?     <Button type="primary" onClick={handleFormUpdate}>更新</Button>
            :  <Button type="primary" onClick={handleForm}>创建</Button>
            }
        </div>
    )
})

export default connect(
    (state)=>({
        selectTags:state.model.selectTags
      }),(dispatch)=>({
        setSelectTags(tags){
            dispatch(setTags(tags))
        }
      })
)(Form.create()(Edit))