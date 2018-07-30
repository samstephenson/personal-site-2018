import React from 'react'

import { rhythm } from '../utils/typography'
import Avatar from '../components/images/avatar.png'


class Bio extends React.Component {
  render() {
  let credits = ""
  if (this.props.credits) {
    credits = <p><small>Thanks to: {this.props.credits}</small></p>
  }
    return (
      <div className="footnotes">
        <p><small>Published {this.props.date}</small></p>
        {credits}
      </div>
    )
  }
}

export default Bio
