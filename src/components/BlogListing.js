import React from 'react'

import { rhythm } from '../utils/typography'
import Avatar from '../components/images/avatar.png'


class BlogListing extends React.Component {
  render() {
    const node = this.props.nodeAddress
    console.log("node is" + node)

    return (
      <div key={node.fields.slug} className={"blogIndexLi " + node.frontmatter.listingType}>
        <Link to={node.fields.slug}>
          {featuredImage}
          <div className="description">
            <h3>
              {title}
            </h3>
            <small>{node.frontmatter.date}, {node.frontmatter.type}</small>
          </div>
        </Link>
      </div>
    )
  }
}

export default BlogListing
