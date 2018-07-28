import React from 'react'

import { rhythm } from '../utils/typography'
import Avatar from '../components/images/avatar.png'


class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <img src={Avatar} alt={`Sam Stephenson`} className="avatar"/>
        <p>Hello! I’m Sam, a <strong>designer and researcher working on alternative forms of education.</strong></p>
        <p>I'm currently in Kathmandu, designing new education programs with <a href="https://appliedcognitivescience.com" title="Applied Cognitive Science">Applied Cognitive Science</a>. Before that, I was part of the experience design team at <a href="https://newdealdesign.com" title="NewDealDesign">NewDealDesign</a> in San Francisco.</p>
        <p>I love meeting new people, online and off. <a href="https://m.me/stephensonsam" title="Send Sam a message">Email me</a> and say hi, or reach out on   , or .</p> 
      </div>
    )
  }
}

export default Bio
