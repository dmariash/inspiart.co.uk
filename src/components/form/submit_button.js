import React from 'react'
import PropTypes from 'prop-types'

class SubmitButton extends React.Component {
  render () {
    const {text, disabled, onSubmit} = this.props
    return (
      <div className='field is-horizontal'>
        <div className='field-label' />
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <button
                type='submit'
                className='button is-primary'
                disabled={disabled}
                onSubmit={onSubmit}
              >
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default SubmitButton
