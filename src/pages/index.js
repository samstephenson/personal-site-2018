import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'


import Bio from '../components/Bio'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import Nav from '../components/Nav'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    

    return (
      <PageTransition transitionTime={100}>
        <div className="container">
          <Helmet title={siteTitle} />
          <Bio />
          <Nav />
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
      </PageTransition>
    )
  }
}

export default BlogIndex

// If this throws up an error saying 'featured image is not a string'.. Double & triple check that there are no references being made to images/files that don't exist. Check page folders and the root 'pages' folder.

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

