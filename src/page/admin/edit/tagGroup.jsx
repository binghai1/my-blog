import React,{useState,useRef,useEffect,memo} from 'react'
import porpTypes from 'prop-types'
import {Input,Tag,Icon,Tooltip} from 'antd'
import Cate from './cate'
import axios from 'axios';
import {createTagsUrl,deleteTagsUrl} from '@/util/interfaces'
import {setTags} from '@/store/actionCreators'
import {connect} from 'react-redux'
const TagGroup=memo((props)=>{
    const {tags,setSelectTags}=props
    const [inputVisible,setInputVisivle] = useState(false)
    const [inputValue,setInputValue]=useState('')
    const InputDom=useRef()
    const [newTags,setNewTags]=useState([])
    useEffect(()=>{
        inputVisible&&InputDom.current.focus()
    },[inputVisible])

    const handleInputChange = e => {
        setInputValue(e.target.value)
    };

    const handleClose = async removedTag => {
        const temp = newTags.filter(tag => tag._id!== removedTag._id);
        await axios.delete(deleteTagsUrl(removedTag._id))
        setNewTags(temp)
        setSelectTags(removedTag._id)
      };

    const showInput = () => {
        setInputVisivle(true);
    };

    const handleInputConfirm =async () => {
        if (inputValue && newTags.indexOf(inputValue) === -1) {
          let res=await axios.post(createTagsUrl,{title:inputValue})
          const temp = [...newTags, res.data.data];
          setNewTags(temp)
          
          setSelectTags(res.data.data._id)
        }
        setInputVisivle(false)
        setInputValue('')
      } ;
     
    return <div className="tag-group" style={{marginTop:20,marginBottom:20}}>
      <Cate tags={tags} />
      {newTags.map((tag, index) => {
          const isLongTag = tag.title.length > 20;
          const tagElem = (
            <Tag key={tag._id}   closable onClose={()=>handleClose(tag)} color="#1890ff">
              {isLongTag ? `${tag.title.slice(0, 20)}...` : tag.title}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag.title} key={index}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible?
             <Input
             ref={InputDom}
             type="text"
             size="small"
             style={{ width: 78 }}
             value={inputValue}
             onChange={handleInputChange}
             onBlur={handleInputConfirm}
             onPressEnter={handleInputConfirm}
           />
            :<Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
             </Tag>
        
        }
    </div>
})
TagGroup.porpTypes={
    sourceData:porpTypes.array.isRequired
}
export default connect(
  (state)=>({
    }),(dispatch)=>({
      setSelectTags(tag){
        dispatch(setTags(tag))
      },
     
    })
)(TagGroup)