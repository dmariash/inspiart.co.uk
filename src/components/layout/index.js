import React from 'react'
import Helmet from 'react-helmet'
import NavBar from './navbar'
import Header from './header'

import './styles.sass'
import config from '../../../meta/config'

const Layout = ({children}) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
    </Helmet>
    <NavBar />
    <Header />
    <section className='hero is-light is-fullheight'>
      <div className='hero-body content'>
        <div className='container'>
          <div>
            <section className='section section--gradient'>
              <div className='container'>
                <div className='section'>
                  <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                      <div className='content'>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Layout
