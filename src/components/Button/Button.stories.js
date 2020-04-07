import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { MdArrowBack, MdAccessAlarm } from 'react-icons/md'
import StyledRouter from '~/../stories/decorators/router'
import Button from '~/components/Button'
import Center from '~/../stories/decorators/center'

export default {
  title: 'Button and Link',
  component: Button,
  decorators: [withKnobs, Center],
}

export const Default = () => {
  const isLink = boolean('isLink', false)

  return (
    <StyledRouter>
      <Button {...(isLink ? { to: '/' } : {})}>for actions</Button>
      <Button to="/">{text('Label', 'for redirects')}</Button>
      <Button Icon={MdAccessAlarm}>With icon</Button>
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
