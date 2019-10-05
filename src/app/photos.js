import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import PhotoGallery from '../components/photo-gallery'
import '../components/layout/styles.sass'

class PhotosPage extends React.Component {
  render () {
    return (
      <Layout>
        <Helmet>
          <title>Jenny and Dan | Photos</title>
          <meta name='description' content='Jenny and Dan' />
        </Helmet>
        <div>
          <div className='page-contents'>
            <PageHeader text='Photos' />
            <p>We'll post wedding photos here when we have them, but for now here are some pictures of us over the last 11 years!</p>
            <PhotoGallery />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PhotosPage
