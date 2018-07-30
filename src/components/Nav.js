import React from 'react'

import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'
import IcArrow from './icons/icArrow.svg'



class Nav extends React.Component {
  render() {
    return (
      <nav>
          <Link to="#" className="active">
            Updates
            <img className="bouncingArrow" src={IcArrow} />
          </Link>
          {/*<Link to="#">About</Link>*/}
      </nav>
    )
  }
}

export default Nav
