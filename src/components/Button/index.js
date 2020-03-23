import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Container from './styles'

const Button = ({ children, to, onClick }) => {
  if (to) {
    return (
      <Container>
        <Link to={to}>{children}</Link>
      </Container>
    )
  }

  return (
    <Container>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: '',
  to: null,
  onClick: () => {},
}

export default Button
