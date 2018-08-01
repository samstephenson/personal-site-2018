import React from 'react'

import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'
import IcArrow from './icons/icArrow.svg'
import IcInstagram from './icons/instagram.svg'
import IcMessenger from './icons/messenger.svg'
import IcMedium from './icons/medium.svg'
import IcSpotify from './icons/spotify.svg'




class Nav extends React.Component {
  render() {
    return (
      <nav>
          <Link to="#" className="active">
            Updates
            <img className="bouncingArrow" src={IcArrow} />
          </Link>
          <div className="socialIcons">
            <Link to="https://instagram.com/samstephnson"><img alt="Instagram – Sam Stephenson" src={IcInstagram} /></Link>
            <Link to="https://m.me/stephensonsam"><img alt="Messenger – Sam Stephenson" src={IcMessenger} /></Link>
            <Link to="https://open.spotify.com/user/11120014586?si=Z3mFN_PLRZSWs3d8NtXHwg"><img alt="Spotify – Sam Stephenson" src={IcSpotify} /></Link>
            <Link to="https://medium.com/@samstephenson1"><img alt="Medium – Sam Stephenson" src={IcMedium} /></Link>
          </div>
          {/*<Link to="#">About</Link>*/}
      </nav>
    )
  }
}

export default Nav
