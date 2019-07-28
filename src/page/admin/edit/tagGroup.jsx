import React,{useState,useRef,useEffect,memo} from 'react'
import porpTypes from 'prop-types'
import {Input,Tag,Icon,Tooltip} from 'antd'
import Cate from './cate'
const TagGroup=memo((props)=>{
    const {onChangeTags,tags}=props
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

    const handleClose = removedTag => {
        console.log(44)
        const temp = newTags.filter(tag => tag !== removedTag);
        setNewTags(temp)
      };

    const showInput = () => {
        setInputVisivle(true);
        
    };

    const handleInputConfirm = () => {
        if (inputValue && newTags.indexOf(inputValue) === -1) {
          const temp = [...newTags, inputValue];
          setNewTags(temp)
        }
        setInputVisivle(false)
        setInputValue('')
      };
     const  handleClick=(tag)=>{
        console.log(tag,333)
      }
    return <div className="tag-group" style={{marginTop:20,marginBottom:20}}>
      <Cate tags={tags}/>
      {newTags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag}   closable onClose={()=>handleClose(tag)} color="#1890ff">
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
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
export default TagGroup