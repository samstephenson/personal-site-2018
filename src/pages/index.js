import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import Feed from './feed';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    //const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="container">
          <Helmet title={siteTitle} />
          <div>
            <Bio />
            <Feed />
          </div>
          {/* {posts.map(({ node }) => {
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
          })} */}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
