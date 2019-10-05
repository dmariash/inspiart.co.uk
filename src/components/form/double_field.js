import React from 'react'
import PropTypes from 'prop-types'

class DoubleField extends React.Component {
  render () {
    const {
      name1,
      name2,
      label,
      value1,
      value2,
      success1,
      success2,
      icon1,
      icon2,
      onChange,
      onBlur,
      placeholder1,
      placeholder2,
    } = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{label}</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control is-expanded has-icons-left has-icons-right'>
              <input
                className={`input ${success1 === true ? 'is-success' : success1 === false ? 'is-danger' : ''}`}
                type='text'
                name={name1}
                value={value1}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder1}
              />
              <span className='icon is-small is-left'>
                <i className={`fas ${icon1 !== undefined ? icon1 : ''}`} />
              </span>
              {(success1 === true) &&
                <span className='icon is-small is-right'>
                  <i className='fas fa-check' />
                </span>
              }
            </p>
          </div>
          <div className='field'>
            <p className='control is-expanded has-icons-left has-icons-right'>
              <input
                className={`input ${success2 === true ? 'is-success' : success2 === false ? 'is-danger' : ''}`}
                type='text'
                name={name2}
                value={value2}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder2}
              />
              <span className='icon is-small is-left'>
                <i className={`fas ${icon2 !== undefined ? icon2 : ''}`} />
              </span>
              {(success2 === true) &&
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

DoubleField.propTypes = {
  name1: PropTypes.string,
  name2: PropTypes.string,
  label: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  success1: PropTypes.bool,
  success2: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
}

export default DoubleField
