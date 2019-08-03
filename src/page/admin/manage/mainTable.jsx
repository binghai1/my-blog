import React,{Component} from 'react'

import { Table,Button,Tag,Popconfirm,message } from 'antd';
import moment from 'moment'
import {withRouter} from 'react-router-dom'
import {deleteArticlesUrl} from '@/util/interfaces'
import axios from 'axios'
const ButtonGroup = Button.Group;

@withRouter
class MainTable extends Component{
    onChange=(pagination)=> {
      this.props.onPageChange(pagination.current)
    }
    handleEdit=(record)=>{
      this.props.history.push(`/admin/articles/edit/?id=${record._id}`)
    }
    handleView=(record)=>{
        this.props.history.push(`/article/${record._id}`)
    }
    confirm=async (record)=>{
       let res= await axios.delete(deleteArticlesUrl(record._id))
       if(res.data.data){
          message.success("删除成功")
       }else{
        message.warning("删除失败")
       }
    }
    getColumns=()=> [
 
      {
        title: '标题',
        dataIndex: 'title',
        align:"center"
      },
      {
        title: '标签',
        dataIndex: 'tags',
        align:"center",
        render:(text,record,index)=>text.map((item,i)=><Tag key={item._id+i+index}>{item.title}</Tag>)
      },
      
      {
        title: '发布时间',
        dataIndex: 'createdAt',
        // sorter: (a, b) => a.age - b.age,
        align:"center",
        sorter:(a,b)=>moment(a.createdAt).isBefore(b.createdAt)?1:-1
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text,record) => 
        <ButtonGroup>
            <Button type="primary" onClick={()=>this.handleView(record)} size="small">查看</Button>
            <Button type="dashed" onClick={()=>this.handleEdit(record)} size="small">编辑</Button>
            <Popconfirm
              title="Are you sure delete this articles?"
              onConfirm={()=>this.confirm(record)}
              okText="ok"
              cancelText="cancel"
            >
            <Button type="danger"   size="small">删除</Button>
            </Popconfirm>
        </ButtonGroup>,
        align:"center"
      },
    ]
    render(){
      const {list,pagination}=this.props
        return(
            <Table pagination={pagination}
              rowKey={record => record._id} style={{marginTop: 40}}   bordered columns={this.getColumns()} dataSource={list} onChange={this.onChange}/>
        )
        
    }
}
export default MainTable