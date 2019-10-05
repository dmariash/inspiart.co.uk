import React from 'react'
import PropTypes from 'prop-types'

class SingleField extends React.Component {
  render () {
    const {name, label, value, success, icon, onChange, onBlur, placeholder} = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{label}</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded has-icons-left has-icons-right'>
              <input
                className={`input ${success === true ? 'is-success' : success === false ? 'is-danger' : ''}`}
                type='text'
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
              />
              <span className='icon is-small is-left'>
                <i className={`fas ${icon !== undefined ? icon : ''}`} />
              </span>
              {(success === true) &&
                <span className='icon is-small is-right'>
                  <i className='fas fa-check' />
                </span>
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

SingleField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  success: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
}

export default SingleField
