import React from 'react'
import './wedding-party-member.sass'

class WeddingPartyMember extends React.Component {

  render () {
    const { image, name, role } = this.props
    return (
      <div className='wpm-container'>
        <img className='wpm-avatar' src={image} />
        <p className='wpm-name'>{name}</p>-<p className='wpm-role'>{role}</p>
      </div>
    )
  }
}

export default WeddingPartyMember
