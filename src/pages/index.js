import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          let featuredImage = ""
          if (node.frontmatter.featuredImage != null) {
            featuredImage = (
              <div className="featuredImage">
                <img src={node.frontmatter.featuredImage.publicURL} />
              </div>
            );
          }

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
        })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM YYYY")
            type
            subtitle
            title
            listingType
            title
            featuredImage {
              publicURL
            }
          }
        }
      }
    }
  }
`

