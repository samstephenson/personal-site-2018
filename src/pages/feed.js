import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
// import BlogIndex from '.';

class Feed extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.markdownRemark.edges');

    return (
      <div>
        <div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug} className={"blogIndexLi " + node.frontmatter.listingType}>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
            <small>{node.frontmatter.date}, {node.frontmatter.type}</small>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Feed