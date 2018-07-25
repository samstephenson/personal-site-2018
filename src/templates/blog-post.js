import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import CloseButton from '../components/CloseButton'
import Feed from '../pages/feed'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div className="blogPost">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.subtitle}</h4>
          <p><small>{post.frontmatter.when}</small><br/><small>{post.frontmatter.what}</small></p>
          <p>{post.frontmatter.type}</p>
          <div className="blogPostInner" dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="footnotes">
            <p><small>Published {post.frontmatter.date}</small></p>
            <p><small>Thanks to: {post.frontmatter.credits}</small></p>
          </div>
          
          <ul className="nextPrevious">
            <li>
              {
                previous &&
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              }
            </li>
            <li>
              {
                next &&
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              }
            </li>
          </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        credits
        when
        what
      }
    }
  }
`
