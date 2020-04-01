import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import avatar from '~/assets/avatar.png'

export default function Avatar({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
}
Avatar.defaultProps = {
  src: avatar,
}
