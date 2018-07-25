import React from 'react'


import { rhythm } from '../utils/typography'

class CTA extends React.Component {
  render() {
    let buttonURL = this.props.url
    let buttonText = this.props.buttonText
    let CTA
    if (buttonURL && buttonText) {
      CTA = (
        <a href={buttonURL} title={buttonText}>
        <button className="CTA">
          {buttonText}
        </button>
        </a>
      )
    } else {
      console.log("CTA button is missing a URL or text in post frontmatter")
    }

    return (
      <div>{CTA}</div>
    )
  }
}

export default CTA
