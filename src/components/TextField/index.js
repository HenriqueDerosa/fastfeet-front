import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Input } from '@rocketseat/unform'
import Container from './styles'

const TextField = ({ placeholder, type, name, icon }) => {
  const renderIcon = useCallback(() => {
    if (icon) {
      const Icon = icon
      return <Icon size={18} color="#DDDDDD" />
    }
    return null
  }, [icon])
  return (
    <Container>
      {renderIcon()}
      <Input name={name} type={type} placeholder={placeholder} />
    </Container>
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.func,
}

TextField.defaultProps = {
  type: 'name',
  name: '',
  placeholder: null,
  icon: null,
}

export default TextField
