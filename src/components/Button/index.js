import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Container from './styles'

const ICON_SIZE = 18

const Button = ({ children, to, onClick, Icon }) => {
  if (to) {
    return (
      <Container>
        <Link to={to}>
          {Icon && <Icon size={ICON_SIZE} />}
          {children}
        </Link>
      </Container>
    )
  }

  return (
    <Container>
      <button type="button" onClick={onClick}>
        {Icon && <Icon size={ICON_SIZE} />}
        {children}
      </button>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.node,
}

Button.defaultProps = {
  children: '',
  to: null,
  onClick: () => {},
  Icon: null,
}

export default Button
