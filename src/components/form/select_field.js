import React from 'react'
import PropTypes from 'prop-types'

class SelectField extends React.Component {
  render () {
    const {name, label, value, onChange, options} = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{label}</label>
        </div>
        <div className='field-body'>
          <div className='field is-narrow'>
            <div className='control'>
              <div className='select is-fullwidth'>
                <select
                  name={name}
                  value={value}
                  onChange={onChange}
                >
                  {options.map(value => {
                    return (
                      <option key={value} value={value}>{value}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default SelectField
