import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Container from './styles'

const ICON_SIZE = 18

const Button = ({ children, to, onClick, Icon, background, ...rest }) => {
  if (to) {
    return (
      <Container background={background} {...rest}>
        <Link to={to}>
          {Icon && <Icon size={ICON_SIZE} />}
          {children}
        </Link>
      </Container>
    )
  }

  return (
    <Container background={background} {...rest}>
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
  background: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  to: null,
  onClick: () => {},
  Icon: null,
  background: null,
}

export default Button
