'use strict'

import React from 'react'

const Button = ({ children, handleClick, texto }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  // handleClick: React.PropTypes.func
  handleClick: React.PropTypes.func.isRequired
}

export default Button
