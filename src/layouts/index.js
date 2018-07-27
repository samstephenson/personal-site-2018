import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import Avatar from '../components/images/avatar.png'


import './index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    /*let header
    header = (
      <nav>
        <Link to={'/'} className="header">
          <img src={Avatar} alt={`Sam Stephenson`} className="avatar"/>
          <h1>
            Sam Stephenson
          </h1>
        </Link>
        <div className="topNav">
          <Link to="/about/">About</Link>
        </div>
      </nav>
    )*/

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    console.log("this Path: " + this.props.match.path)
    

    return (
        <div>
          {/*header*/}
          {children()}
        </div>
    )
  }
}

export default Template
