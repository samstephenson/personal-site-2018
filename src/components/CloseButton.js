import React from 'react'
import Link from 'gatsby-link'

import icClose from './icons/icClose.svg'
import { rhythm } from '../utils/typography'

class CloseButton extends React.Component {
  render() {
    let closeLink
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    closeLink = ( 
      <Link to={rootPath}>
        <img src={icClose} alt="Close this page"/>
      </Link>
    )

    return (
      <div>
        <div className="CloseButton">
          {closeLink}
        </div>
      </div>
    )
  }
}

export default CloseButton
