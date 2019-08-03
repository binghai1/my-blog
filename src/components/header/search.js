import  React from 'react'
import {Input,Icon} from 'antd'

const Search=({onClick,onChange})=>{

    return (
        <div className="search-container" >
            <Icon type='search' onClick={onClick} />
            <Input placeholder="搜索文章" onPressEnter={onClick} onChange={(value)=>onChange(value)} />
        </div>
    )
}
export default Search