import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import WeddingPartyMember from '../components/wedding-party-member'

import { wpm } from '../img'
import clockbarn from '../img/clockbarn.jpg'
import '../components/layout/styles.sass'

const HomePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jenny and Dan | Home</title>
        <meta name='description' content='Jenny and Dan' />
      </Helmet>
      <div>
        <div className='page-contents'>
          <PageHeader text="We're getting married!" />
          <p>Please join us to celebrate our wedding on <b>Saturday, June 15, 2019</b></p>
          <p>The ceremony will begin at 2pm, and both ceremony and reception will be held at <b>Clock Barn</b> at <b>Tufton Warren, Whitchurch, RG28 7RB, UK</b>.</p>
          <p>If you haven't already done so, please <Link to='/app/rsvp'>click here to send us your RSVP</Link>!</p>
          <p style={{fontFamily: 'Alex Brush, cursive', fontSize: '3em'}}>Jenny and Dan x</p>
          <img src={clockbarn} />
          <hr />
          <h3>Wedding Party</h3> 
          <div>
            <WeddingPartyMember image={wpm.sara} name='Sara Zavagno' role='Maid of Honour' />
            <WeddingPartyMember image={wpm.chris} name='Chris Wragg' role='Best Man' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
