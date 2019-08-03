
import React, { Component } from 'react'
import MainTable from './mainTable'
import Search from './search'
import {getArticlesUrl,getTagsUrl} from '@/util/interfaces'
import axios from 'axios'
 class Manage extends Component{
     state={
        tags:[],
        list:[],
        pagination:""
     }
     async componentDidMount(){
        let res=await axios.get(getTagsUrl)
        this.setState({tags:res.data.data})
        this.fetchArticleData()
     }
     handleSearchClick=async (value)=>{
        this.fetchArticleData({q:value.title,tag:value.tag})
     }
   
     onChange=(page)=>{
        this.fetchArticleData({page})
     }
     fetchArticleData=async (obj)=>{
        let res=await axios.get(getArticlesUrl({...obj}))
        const pagination = {
            pageSize:10,
            total: res.data.totalPage*10
          }
        this.setState({list:res.data.data,pagination})
     }
    render(){
        const {tags,list,pagination} = this.state
        return (
            <div className="edit-wrapper">
                <Search tags={tags} handleSearchClick={this.handleSearchClick}/>
                <MainTable onPageChange={this.onChange} pagination={pagination} list={list}/>
            </div>
        )
    }
 }

export default Manage