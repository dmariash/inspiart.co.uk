import React from 'react'
import Helmet from 'react-helmet'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'

const TravelPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jenny and Dan | Accommodation</title>
        <meta name='description' content='Jenny and Dan' />
      </Helmet>
      <div>
        <div className='page-contents'>
          <PageHeader text='Accommodation' />
          <div>
            <div className='content is-box'>
              <h4>Premier Inn, Winchester</h4>
              <p><i className='fas fa-link' />
                &nbsp;
                <a href='https://www.premierinn.com/gb/en/hotels/england/hampshire/winchester/winchester.html' target='_blank'>
                  goo.gl/UZRAkp
                </a>
              </p>
              <p><i className='fas fa-map-marker-alt' />&nbsp;Caledonia House, Winchester, SO23 7RT</p>
              <p><i className='fas fa-phone' />&nbsp;0333 003 8101</p>
              <p><i className='fas fa-taxi' />&nbsp;13.6 miles, 15 minute drive to venue</p>
              <p>
                <i className='fas fa-comment-alt' />
                &nbsp; This is likely to be the cheapeast option if you are booking well in advance but it's worth checking other hotels in the area. 
                This is the closest budget hotel to the centre of Winchester (though still a 20 min walk).
              </p>
            </div>
            <div className='content is-box'>
              <h4>Holiday Inn, Winchester</h4>
              <p><i className='fas fa-link' />&nbsp;<a href='https://www.hiwinchester.co.uk/' target='_blank'>www.hiwinchester.co.uk</a></p>
              <p><i className='fas fa-map-marker-alt' />&nbsp;Telegraph Way, SO21 1HZ</p>
              <p><i className='fas fa-phone' />&nbsp;01962 670 700</p>
              <p><i className='fas fa-taxi' />&nbsp;12.3 miles, 15 minute drive to venue</p>
              <p>
                <i className='fas fa-comment-alt' />
                &nbsp;In case the Premier Inn above gets booked up or increases in price, we have block reserved some rooms at the Holiday Inn until 2 months before the wedding. If you call the booking line and quote 'JDM'.
                £135 for a double room with breakfast and flexible cancellation.
                £165 for a family room (2 adults, 2 children) with breakfast and flexible cancellation.
                You may be able to get a cheaper rate by booking online if you are happy for it to be non-refundable, or if you don't want breakfast.
              </p>
            </div>
            <div className='content is-box'>
              <h4>Premier Inn, Andover</h4>
              <p><i className='fas fa-link' />
                &nbsp;
                <a href='https://www.premierinn.com/gb/en/hotels/england/hampshire/andover/andover.html' target='_blank'>
                  goo.gl/5gxfTj
                </a>
              </p>
              <p><i className='fas fa-map-marker-alt' />&nbsp;West Portway Industrial Estate, Andover SP10 3UX</p>
              <p><i className='fas fa-phone' />&nbsp;0871 527 8020</p>
              <p><i className='fas fa-taxi' />&nbsp;11.5 miles, 13 minute drive to venue</p>
              <p>
                <i className='fas fa-comment-alt' />
                &nbsp;There is also a Premier Inn in Andover which is very slightly closer to the venue. However Winchester is lovely so we'd recommend there if you are making a weekend of it. 
              </p>
            </div>
            <div className='content is-box'>
              <h4>Other Hotels and B&Bs</h4>
              <p><i className='fas fa-link' />
                &nbsp;
                <a href='http://wedding-venues-enquiries.co.uk/ClockBarn/ClockBarnAccommodationList.pdf' target='_blank'>
                  goo.gl/6qhkFS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default TravelPage
