import React from 'react'
import PropTypes from 'prop-types'

class TextAreaField extends React.Component {
  render () {
    const {name, label, value, onChange, placeholder} = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{label}</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <textarea
                className='textarea'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TextAreaField
