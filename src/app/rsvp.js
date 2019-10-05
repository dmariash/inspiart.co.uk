import React from 'react'
import Helmet from 'react-helmet'
import RSVPForm from '../components/rsvp-form'
import Layout from '../components/layout'

const RSVPPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>RSVP | Jenny and Dan</title>
        <meta name='description' content='Jenny and Dan' />
      </Helmet>
      <div>
        <h2 className='has-text-weight-semibold is-size-2'>
          RSVP
        </h2>
        <div>
          <RSVPForm />
        </div>
      </div>
    </Layout>
  )
}
export default RSVPPage
