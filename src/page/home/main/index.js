import React,{useEffect,useState,memo, Fragment} from 'react'
import { List, Divider } from 'antd';
import {Link} from 'react-router-dom'
import Preview from './preview'
import './index.less'
import {IconText,IconTag} from '@/components/iconEnhance'
import moment from 'moment'
import axios from 'axios'
import {getArticlesUrl} from '@/util/interfaces'
import {withRouter} from 'react-router-dom'
import {saveHomeList} from '@/store/actionCreators'
import {translateMarkdown}  from '@/util'
import {connect} from 'react-redux'
import LoadingAct from '@/components/loading';
const Main = ({location,saveList,width})=>{

    const [list,setList]=useState("")
    const [totalPage,setTotalPage]=useState(1)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        let q=location.search.slice(3)
        let obj={}
        if(q){
            obj.q=q
        }
        axios.get(getArticlesUrl(obj)).then((res)=>{
            let list=res.data.data
            list.forEach(item => {
                let index = item.content.indexOf('<!--more-->')
                if(index===-1){
                    index=Math.min(item.content.length,100)
                }
                item.description = translateMarkdown(item.content.slice(0, index))
              })
            setList(list)
            saveList(list)
            setLoading(true)
            setTotalPage(parseInt(res.data.totalPage)*10)
        })
    },[location.search])

    return <div className="main-container">
                {loading?(
                    <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: async page => {
                        axios.get(getArticlesUrl({page})).then((res)=>{
                            setList(res.data.data)
                            saveList(res.data.data)
                            setTotalPage(parseInt(res.data.totalPage)*10)
                        })
                    },
                    total:totalPage ,
                    pageSize: 10,
                    }}
                    dataSource={list}
                    footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                    }
                    renderItem={item => (
                        <Link to={"/article/"+item._id}>
                            <List.Item
                        className="ls-item"
                        key={item._id}
                        actions={[
                        <IconText type="like-o" text="156" />,
                        <IconTag  type="tag" text={item.tags} useIdexKey={true} />
                        ]}
                        // extra={
                        // <img
                        //     width={272}
                        //     alt="logo"
                        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        // />
                        // }
                         >
                        <Divider orientation="left">
                            <span className="title">{item.title}</span>
                            <span className="time">{moment(item.createAt).format("YYYY-MM-DD")}</span>
                        </Divider>
                        <div dangerouslySetInnerHTML={{__html:item.description}} />
                         </List.Item>
                        </Link>
                    )}
                >
                {width > 738 && <Preview/>}
                </List>):<LoadingAct/>}
                
                
    </div>
}
export default memo(connect(
    (state)=>({width:state.model.width}),(dispatch)=>({
        saveList(list){
            dispatch(saveHomeList(list))
        }
    })
)
(withRouter(Main,(prevProps, nextProps) =>
    (prevProps.location.search === nextProps.location.search)&&(prevProps.location.width == nextProps.location.width)
)))