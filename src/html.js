/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{__html: inlinedStyles}}
        />
      )
    }
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          {css}
        </head>
        <body>
          <form name='rsvpnew' netlify='true' data-netlify='true' hidden>
            <input type='text' name='guest_1_name' />
            <input type='radio' name='coming' value='yes' defaultChecked />
            <input type='radio' name='coming' value='no' />
            <input type='text' name='email' />

            <select value='0' name='number_people'>
              <option value='0' defaultValue>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>

            <input type='text' name='guest_2_name' />
            <input type='text' name='guest_3_name' />
            <input type='text' name='guest_4_name' />
            <input type='text' name='guest_5_name' />

            <input type='radio' name='guest_1_menu' value='meat_fish' defaultChecked />
            <input type='radio' name='guest_1_menu' value='vegetarian' />

            <input type='radio' name='guest_2_menu' value='meat_fish' defaultChecked />
            <input type='radio' name='guest_2_menu' value='vegetarian' />
            <input type='radio' name='guest_2_menu' value='child' />

            <input type='radio' name='guest_3_menu' value='meat_fish' defaultChecked />
            <input type='radio' name='guest_3_menu' value='vegetarian' />
            <input type='radio' name='guest_3_menu' value='child' />

            <input type='radio' name='guest_4_menu' value='meat_fish' defaultChecked />
            <input type='radio' name='guest_4_menu' value='vegetarian' />
            <input type='radio' name='guest_4_menu' value='child' />

            <input type='radio' name='guest_5_menu' value='meat_fish' defaultChecked />
            <input type='radio' name='guest_5_menu' value='vegetarian' />
            <input type='radio' name='guest_5_menu' value='child' />
            <textarea name='comments' />
          </form>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/js/toggle.js'} />
        </body>
      </html>
    )
  }
}
