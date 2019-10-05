import React from 'react'
import Gallery from 'react-photo-gallery'
import Measure from 'react-measure'

import { gallery_photos } from '../img'

const photos = [
  {src: gallery_photos.jennydan1, width: 4, height: 3},
  {src: gallery_photos.jennydan2, width: 4, height: 3},
  {src: gallery_photos.jennydan11, width: 3, height: 4},
  {src: gallery_photos.jennydan3, width: 4, height: 3},
  {src: gallery_photos.jennydan4, width: 4, height: 3},
  {src: gallery_photos.jennydan5, width: 4, height: 3},
  {src: gallery_photos.jennydan6, width: 4, height: 3},
  {src: gallery_photos.jennydan7, width: 3, height: 4},
  {src: gallery_photos.jennydan8, width: 4, height: 3},
  {src: gallery_photos.jennydan12, width: 4, height: 3},
  {src: gallery_photos.jennydan10, width: 4, height: 3},
  {src: gallery_photos.jennydan9, width: 4, height: 3},
]

class PhotoGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = { width: -1 }
    this.chunk = this.chunk.bind(this)
  }

  chunk (arr, len) {
    const chunks = []
    let i = 0
    const n = arr.length
    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }
    return chunks
  }

  render () {
    const width = this.state.width
    return (
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
          ({measureRef}) => {
            if (width < 1) {
              return <div ref={measureRef} />
            }
            let columns = 2
            if (width >= 480) {
              columns = 3
            }
            if (width >= 900) {
              columns = 4
            }
            const photoChunks = this.chunk(photos, columns)
            const galleries = photoChunks.map((photoChunk) => <Gallery photos={photoChunk} columns={photoChunk.length} />)
            return (
              <div ref={measureRef}>
                {galleries}
              </div>
            )
          }
        }
      </Measure>
    )
  }
}

export default PhotoGallery
