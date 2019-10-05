/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import { Navbar } from 'react-bulma-components'
import { isLoggedInAdmin } from '../../utils/auth'
import './navbar.sass'

class NavbarLink extends React.Component {
  render () {
    return (
      <Navbar.Item renderAs='div'>
        <Link className='navbar-item' to={this.props.to}>
          {this.props.text}
        </Link>
      </Navbar.Item>
    )
  }
}

class WeddingNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
    this.downloadFormData = this.downloadFormData.bind(this)
    this.convertArrayOfObjectsToCSV = this.convertArrayOfObjectsToCSV.bind(this)
    this.downloadCSV = this.downloadCSV.bind(this)
  }

  downloadFormData () {
    const url = `https://api.netlify.com/api/v1/forms/${process.env.NETLIFY_FORM_ID}/submissions?access_token=${process.env.NETLIFY_ACCESS_TOKEN}`
    axios.get(url)
      .then((response) => {
        this.setState({data: response.data.map((d) => d.data)}, () => {
          this.downloadCSV()
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  convertArrayOfObjectsToCSV (args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data

    data = args.data || null
    if (data == null || !data.length) {
      return null
    }

    columnDelimiter = args.columnDelimiter || ','
    lineDelimiter = args.lineDelimiter || '\n'

    keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    data.forEach((item) => {
      ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]
        ctr++;
      });
      result += lineDelimiter
    });

    return result
  }

  downloadCSV () {
    let csv = this.convertArrayOfObjectsToCSV({
      data: this.state.data,
    })
    if (csv == null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv
    }
    const data = encodeURI(csv)

    let link = document.createElement('a')
    link.setAttribute('href', data)
    link.setAttribute('download', filename)
    link.click()
  }

  render () {
    return (
      <Navbar fixed='top'>
        <Navbar.Brand>
          <NavbarLink text='Our Wedding' to='/app/home' />
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <NavbarLink text='Travel' to='/app/travel' />
            <NavbarLink text='Accommodation' to='/app/accommodation' />
            <NavbarLink text='Photos' to='/app/photos' />
            <NavbarLink text='RSVP' to='/app/rsvp' />
            <Navbar.Item renderAs='div'>
              <a className='navbar-item' href='https://prezola.com/wishlists/10201147/' target='_blank'>Gift List</a>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position='end'>
            {isLoggedInAdmin() &&
              <Navbar.Item renderAs='div'>
                <Link className='navbar-item' onClick={this.downloadFormData}>
                  <i className='fas fa-file-download' />&nbsp;RSVP CSV Download
                </Link>
              </Navbar.Item>
            }
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}

export default WeddingNavBar
