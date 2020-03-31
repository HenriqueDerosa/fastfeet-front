import React from 'react'
import StyledRouter from './decorators/router'
import Button from '~/components/Button'

export default {
  title: 'Button and Link',
  component: Button,
}

export const Default = () => {
  return (
    <StyledRouter>
      <Button>for actions</Button>
    </StyledRouter>
  )
}

export const Link = () => {
  return (
    <StyledRouter>
      <Button to="/">for redirects</Button>
    </StyledRouter>
  )
}
