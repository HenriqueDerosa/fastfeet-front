import React from 'react'
import { MdArrowBack } from 'react-icons/md'
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
      <Button Icon={MdArrowBack}>With icon</Button>
      <Button Icon={MdArrowBack}>With icon and big text</Button>
    </StyledRouter>
  )
}

export const Link = () => {
  return (
    <StyledRouter>
      <Button to="/">for redirects</Button>
      <Button to="/" Icon={MdArrowBack}>
        Go Back
      </Button>
    </StyledRouter>
  )
}
