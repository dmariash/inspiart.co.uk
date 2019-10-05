import React from 'react'
import Helmet from 'react-helmet'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'
import GoogleMap from '../components/google-map'


const TravelPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jenny and Dan | Travel</title>
        <meta name='description' content='Jenny and Dan' />
      </Helmet>
      <div>
        <div className='page-contents'>
          <PageHeader text='Travel' />
          <p><GoogleMap /></p>
          <div className='content is-box'>
            <h4>By train</h4>
            The local train stations are:
            <ul>
              <li>Whitchurch 2.5 miles</li>
              <li>Micheldever 5 miles</li>
              <li>Winchester 8.5 miles</li>
            </ul>
            <p>All three are operated by South Western Trains and are on the direct line from London Waterloo.</p>
          </div>
          <div className='content is-box'>
            <h4>By car</h4>
            <p>The barn is just five minutes from the A34 and 15 minutes from both Winchester and Newbury.</p>
            <p>There is a large car park. Please direct Sat Nav to RG28 7RB (this brings you to the bottom of the main drive).</p>
            <p>You may leave your car overnight in the car park but are required to collect it between 8am and 11am the following morning.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default TravelPage
