import React from 'react'
import './google-map.sass'

class IFrame extends React.Component {
  iframe () {
    return {
      __html: this.props.iframe,
    }
  }

  render () {
    return (
      <div>
        <div className='map-responsive' dangerouslySetInnerHTML={this.iframe()} />
      </div>
    )
  }
}

class GoogleMap extends React.Component {
  render () {
    const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160034.6164486312!2d-1.416443875895129!3d51.1906844858712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48740530f25f23eb%3A0x856646cec7a778c4!2sClock+Barn!5e0!3m2!1sen!2suk!4v1531078291576" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    return (
      <IFrame iframe={map} />
    )
  }
}

export default GoogleMap
