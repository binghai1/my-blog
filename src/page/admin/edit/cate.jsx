import React, { Fragment } from 'react'

import { Tag } from 'antd';

const { CheckableTag } = Tag;


class Cate extends React.Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
      const {tags} = this.props
    const { selectedTags } = this.state;
    return (
      <Fragment>
        <h6 style={{ marginRight: 8, display: 'inline' }}>Tags:</h6>
        {tags.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Fragment>
    );
  }
}
export default Cate