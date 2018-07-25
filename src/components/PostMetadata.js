
import React from 'react'


import { rhythm } from '../utils/typography'

class PostMetadata extends React.Component {
  render() {
    let dates = this.props.when
    let tags = this.props.what
    let metadata
    if(dates || tags) {
      metadata = (
        <p>
          <small>{dates}</small>
          <small>{tags}</small>
        </p>
      )
    }

    return (
      <div className="postMetadata">
        {metadata}
      </div>
    )
  }
}

export default PostMetadata
