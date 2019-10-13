import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.title} className="column is-6">
        <div className="card card-horizontal">
          <div className="card-image">
            <PreviewCompatibleImage imageInfo={item} />
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4"><ReactMarkdown source={item.title} /></p>
              </div>
            </div>

            <div class="content">
              <ReactMarkdown source={item.info} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      info: PropTypes.string,
    })
  ),
}

export default FeatureGrid
