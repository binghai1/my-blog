
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Button} from 'antd'
import Search from './search'
import Nav from './nav'
import './index.less'
const Head=(props)=>{
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    useEffect(()=>{

    })
    return <div className="header-container" >
      
    </div>
}
export default Head