import React from 'react'

import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'



class Nav extends React.Component {
  render() {
    return (
      <nav>
          <Link to="#" className="active">Updates</Link>
          <Link to="#">About</Link>
      </nav>
    )
  }
}

export default Nav
