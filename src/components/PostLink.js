import React from 'react'
import Link from 'gatsby-link'


import { rhythm } from '../utils/typography'

class PostLink extends React.Component {
  render() {
    return (
      <div>
        <Link to={node.fields.slug}>
          {node.frontmatter.title} ({node.frontmatter.date})
        </Link>
      </div>
    )
  }
}

export default PostLink
