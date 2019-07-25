import React from 'react'
import Loading from '@/components/loading'
import { List, Avatar, Icon,Divider,Tag } from 'antd';
import {Link} from 'react-router-dom'
import Preview from './preview'
import './index.less'
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  const IconTag = ({ type, tagGroup }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {tagGroup.map((item,index)=> <Tag key={index} color="volcano">{item}</Tag>)}
    </span>
  );
  
const Main = ()=>{
    return <div className="main-container">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                    }
                    renderItem={item => (
                        <Link to="/article/1">
                            <List.Item
                        className="ls-item"
                        key={item.title}
                        actions={[
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <IconText type="message" text="2" />,
                        <IconTag type="tag" tagGroup={['js','react']} />
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
                            <span className="time">2019-07-25</span>
                        </Divider>
                        {item.content}
                         </List.Item>
                        </Link>
                    )}
                />
                <Preview/>
                
    </div>
}
export default Main