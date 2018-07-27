import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PageTransition from 'gatsby-plugin-page-transitions'
import Img from 'gatsby-image'

import CTA from '../components/CTA'
import PostMetadata from '../components/PostMetadata'
import CloseButton from '../components/CloseButton'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    let SplashImage = ""
    if (post.frontmatter.splashImage != null) {
      SplashImage = (
        <Img className="splashImage" sizes={post.frontmatter.splashImage.childImageSharp.sizes} />
      )
    }
    let title = post.frontmatter.title
    if (post.frontmatter.pageTitle) {
      title = post.frontmatter.pageTitle
    }

    /*let closeButton = ``
    if (this.props.location.pathname !== rootPath) {
      closeButton = <CloseButton />
    }*/

    return (
      <PageTransition
        defaultStyle={{
          transition: 'all 100ms ease-out',
          top: '40vh',
          position: 'absolute',
          height: '40vh',
          width: '100%',
        }}
        transitionStyles={{
          entering: { top: '40%', opacity: 0, transform: 'scale(0.95)', },
          entered: { top: 'auto', opacity: 1, transform: 'scale(1)', },
          exiting: { top: '40%', opacity: 0, transform: 'scale(0.95)', },
        }}
        transitionTime={200}
      >
        <CloseButton />
        <div className={"blogPost " + post.frontmatter.listingType}>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <div className="postFrontmatter">
                <div>
                <h1 className="postTitle">{title}</h1>
                <h4>{post.frontmatter.subtitle}</h4>
                <PostMetadata 
                  when={post.frontmatter.when} 
                  what={post.frontmatter.what}
                />
                <CTA
                  url={post.frontmatter.buttonURL}
                  buttonText={post.frontmatter.buttonText}
                />
                <p>{post.frontmatter.type}</p>
              </div>
              <div className="splashImage">
                {SplashImage}
              </div>
            </div>
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
      </PageTransition>
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
        pageTitle
        subtitle
        date(formatString: "MMMM DD, YYYY")
        listingType
        credits
        when
        what
        buttonURL
        buttonText
        splashImage {
          childImageSharp{
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes
            }
          } 
        }
      }
    }
  }
`
