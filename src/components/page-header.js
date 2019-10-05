import React from 'react'
import fern1 from '../img/fern1.png'
import fern2 from '../img/fern2.png'
import './page-header.sass'

class PageHeader extends React.Component {
  render () {
    return (
      <h2 className='has-text-weight-semibold is-size-2'>
        <div className='page-header-container'>
          <img src={fern1} />
          {this.props.text}
          <img src={fern2} />
        </div>
      </h2>
    )
  }
}

export default PageHeader
