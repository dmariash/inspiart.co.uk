import React from 'react'
import PropTypes from 'prop-types'
import { GalleryPageTemplate } from '../../templates/gallery-page'

const GalleryPagePreview = ({ entry, getAsset }) => {

  return (
    <GalleryPageTemplate
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
      images={{
        src: entry.getIn(['data', 'image'])
      }}
    />
  )
}

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPagePreview
