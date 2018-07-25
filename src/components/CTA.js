import React from 'react'


import { rhythm } from '../utils/typography'

class CTA extends React.Component {
  render() {
    let buttonURL = this.props.url
    let buttonText = this.props.buttonText

    return (
      <a href={buttonURL} title={buttonText}>
        <button className="CTA">
          {buttonText}
        </button>
      </a>
    )
  }
}

export default CTA
