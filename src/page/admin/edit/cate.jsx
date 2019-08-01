import React, { Fragment,PureComponent } from 'react'

import { Tag } from 'antd';
import { connect } from 'react-redux';
import {setTags} from '@/store/actionCreators'
const {CheckableTag}=Tag
@connect(()=>({

}),(dispatch)=>({
  setSelectTags(tag){
    dispatch(setTags(tag))
  }
}))
class Cate extends PureComponent {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    this.setState({ selectedTags: nextSelectedTags });
    this.props.setSelectTags(tag)
  }
  render() {
    const { selectedTags } = this.state;
    const {tags} = this.props
    return (
      <Fragment>
        <h6 style={{ marginRight: 8, display: 'inline' }}>Tags:</h6>
        {tags.map(tag => (
          <CheckableTag
            key={tag._id}
            checked={selectedTags.indexOf(tag._id) > -1}
            onChange={checked => this.handleChange(tag._id, checked)}
          >
            {tag.title}
          </CheckableTag>
        ))}
      </Fragment>
    );
  }
}
export default Cate