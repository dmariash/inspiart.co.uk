import React from 'react'
import SingleField from './form/single_field'
import DoubleField from './form/double_field'
import RadioField from './form/radio_field'
import SelectField from './form/select_field'
import TextAreaField from './form/textarea_field'
import SubmitButton from './form/submit_button'
import './rsvp-form.scss'

class RSVPForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      values: {
        email: '',
        coming: 'yes',
        number_people: '0',
        comments: '',
        guest_1_name: '',
        guest_2_name: '',
        guest_3_name: '',
        guest_4_name: '',
        guest_5_name: '',
        guest_1_menu: 'meat_fish',
        guest_2_menu: 'meat_fish',
        guest_3_menu: 'meat_fish',
        guest_4_menu: 'meat_fish',
        guest_5_menu: 'meat_fish',
      },
      classes: {
        email: '',
        guest_1_name: '',
        guest_2_name: '',
        guest_3_name: '',
        guest_4_name: '',
        guest_5_name: '',
      },
      canSubmit: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
    this.setCanSubmit = this.setCanSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.encode = this.encode.bind(this)
  }

  handleChange (event) {
    const values = Object.assign({}, this.state.values)
    const {name, value} = event.target
    values[name] = value
    if (name === 'coming') {
      values['number_of_people'] = '0'
    }
    this.setState({values: values}, () => {
      if (['number_people', 'coming'].indexOf(name) > -1) {
        this.setCanSubmit()
      }
    })
  }

  validate (event) {
    const classes = Object.assign({}, this.state.classes)
    const {name} = event.target
    const value = this.state.values[name]
    let result
    if (['first_name', 'last_name'].indexOf(name) > -1) {
      result = value.length > 2 ? 'is-success' : 'is-danger'
    } else if ([
      'guest_1_name', 'guest_2_name',
      'guest_3_name', 'guest_4_name',
    ].indexOf(name) > -1) {
      result = value.length > 2 ? 'is-success' : 'is-danger'
    } else if (name === 'email') {
      result = ((value.indexOf('@') > -1) && (value.length > 3)) ? 'is-success' : 'is-danger'
    } else {
      result = 'is-normal'
    }
    classes[name] = result
    this.setState({classes: classes}, () => this.setCanSubmit())
  }

  setCanSubmit () {
    let canSubmit = true
    const guests = parseInt(this.state.values.number_people) + 1
    for (const key in this.state.classes) {
      if (key.startsWith('guest_')) {
        if (parseInt(key.split('_')[1]) < guests) {
          if (this.state.classes[key] !== 'is-success') {
            canSubmit = false
          }
        }
      } else {
        if (this.state.classes[key] !== 'is-success') {
          canSubmit = false
        }
      }
    }
    this.setState({canSubmit: canSubmit})
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit (e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST', 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: this.encode({'form-name': 'rsvpnew', ...this.state.values}),
    })
      .then(() => alert('Thank you, we have received your submission!'))
      .catch(error => alert(error))
    e.preventDefault()
  }

  render () {
    return (
      <form name='rsvpnew' method='post'>
        <input type='hidden' name='form-name' value='rsvpnew' />

        <SingleField
          name='guest_1_name'
          label='Lead Guest'
          value={this.state.values.guest_1_name}
          icon='fa-user'
          success={
            this.state.classes.guest_1_name === 'is-success' ? true : 
              this.state.classes.eguest_1_namemail === 'is-danger' ? false :
                undefined
          }
          placeholder='Full Name'
          onChange={this.handleChange}
          onBlur={this.validate}
        />

        <SingleField
          name='email'
          label='Email'
          value={this.state.values.email}
          icon='fa-envelope'
          success={
            this.state.classes.email === 'is-success' ? true : 
              this.state.classes.email === 'is-danger' ? false :
                undefined
          }
          onChange={this.handleChange}
          onBlur={this.validate}
        />

        <RadioField
          name='coming'
          label='Coming?'
          value1='yes'
          value2='no'
          label1='Yes'
          label2='No'
          checked={this.state.values.coming}
          onChange={this.handleChange}
        />

        {this.state.values.coming === 'yes' && 
          <RadioField
            name='guest_1_menu'
            label='Lead Guest Menu'
            value1='meat_fish'
            value2='vegetarian'
            label1='Meat/Fish'
            label2='Vegetarian'
            checked={this.state.values.guest_1_menu}
            onChange={this.handleChange}
          />
        }
        
        {this.state.values.coming === 'yes' && 
          <SelectField
            name='number_people'
            label='How many more people in your party?'
            value={this.state.values.number_people}
            onChange={this.handleChange}
            options={['0', '1', '2', '3', '4']}
          />
        }

        {this.state.values.coming === 'yes' &&
          Array.from(new Array(parseInt(this.state.values.number_people)), (val, index) => {
            const guest_number = index + 2
            return (
              <span>
                <SingleField
                  name={`guest_${guest_number}_name`}
                  label={`Guest ${guest_number} Name`}
                  value={this.state.values[`guest_${guest_number}_name`]}
                  icon='fa-user'
                  success={
                    this.state.classes[`guest_${guest_number}_name`] === 'is-success' ? true : 
                      this.state.classes[`guest_${guest_number}_name`] === 'is-danger' ? false :
                        undefined
                  }
                  placeholder='Full Name'
                  onChange={this.handleChange}
                  onBlur={this.validate}
                />

                <RadioField
                  name={`guest_${guest_number}_menu`}
                  label={`Guest ${guest_number} Menu`}
                  value1='meat_fish'
                  value2='vegetarian'
                  value3='child'
                  label1='Meat/Fish'
                  label2='Vegetarian'
                  label3='Child'
                  checked={this.state.values[`guest_${guest_number}_menu`]}
                  onChange={this.handleChange}
                />
                <br />
              </span>
            )
          })
        }

        <TextAreaField
          name='comments'
          label='Comments'
          value={this.state.values.comments}
          onChange={this.handleChange}
          placeholder='Any other comments or precise dietary requirements we should know of?'
        />

        <SubmitButton text='Submit' disabled={!this.state.canSubmit} onSubmit={this.handleSubmit}/>

      </form>
    )
  }
}

export default RSVPForm
