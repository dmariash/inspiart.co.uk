import React from 'react'
import PropTypes from 'prop-types'

class RadioField extends React.Component {
  render () {
    const {
      name,
      label,
      value1,
      value2,
      value3,
      label1,
      label2,
      label3,
      checked,
      onChange} = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>{label}</label>
        </div>
        <div className='field-body'>
          <div className='field is-narrow'>
            <div className='control'>
              <label className='radio'>
                <input
                  type='radio'
                  name={name}
                  value={value1}
                  checked={checked === value1}
                  onChange={onChange}
                />
                <label htmlFor={value1} style={{'margin': '0em 1em 0em 0.3em'}}>{label1}</label>
              </label>
              <label className='radio'>
                <input
                  type='radio'
                  name={name}
                  value={value2}
                  checked={checked === value2}
                  onChange={onChange}
                />
                <label htmlFor={value2} style={{'margin': '0em 1em 0em 0.3em'}}>{label2}</label>
              </label>
              {value3 && label3 ?
                <label className='radio'>
                  <input
                    type='radio'
                    name={name}
                    value={value3}
                    checked={checked === value3}
                    onChange={onChange}
                  />
                  <label htmlFor={value3} style={{'margin': '0em 1em 0em 0.3em'}}>{label3}</label>
                </label> : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default RadioField
