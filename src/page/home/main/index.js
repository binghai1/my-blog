import React,{useEffect,useState,memo} from 'react'
import { List, Divider } from 'antd';
import {Link} from 'react-router-dom'
import Preview from './preview'
import './index.less'
import {IconText,IconTag} from '@/components/iconEnhance'
import moment from 'moment'
import axios from 'axios'
import {getArticlesUrl} from '@/util/interfaces'
const Main = memo(()=>{
    const [list,setList]=useState("")
    const [totalPage,setTotalPage]=useState(1)
    useEffect(()=>{
        axios.get(getArticlesUrl()).then((res)=>{
            setList(res.data.data)
            setTotalPage(parseInt(res.data.totalPage)*5)
        })
    },[])
    return <div className="main-container">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: async page => {
                        axios.get(getArticlesUrl({page})).then((res)=>{
                            setList(res.data.data)
                            setTotalPage(parseInt(res.data.totalPage)*5)
                        })
                    },
                    total:totalPage ,
                    pageSize: 5,
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
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <IconText type="message" text="2" />,
                        <IconTag type="tag" text={item.tags} useIdexKey={true} />
                        ]}
                        extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                        }
                         >
                        <Divider orientation="left">
                            <span className="title">{item.title}</span>
                            <span className="time">{moment(item.createAt).format("YYYY-MM-DD")}</span>
                        </Divider>
                        {item.content}
                         </List.Item>
                        </Link>
                    )}
                />
                <Preview/>
                
    </div>
})
export default Main