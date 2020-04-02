import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import avatar from '~/assets/avatar.png'

export default function Avatar({ src, alt, name }) {
  return (
    <Container>
      <img src={src} alt={alt} />
      {name && <span>{name}</span>}
    </Container>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string,
}
Avatar.defaultProps = {
  src: avatar,
  name: null,
}
