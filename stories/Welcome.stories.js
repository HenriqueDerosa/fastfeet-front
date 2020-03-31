import React from 'react'
import logo from '~/assets/logo.png'
import Center from './decorators/center'

export const Welcome = () => <img src={logo} alt="fastfeet " />
Welcome.story = { name: 'FastFeet Logo' }

export default {
  title: 'Logo',
  component: Welcome,
  decorators: [Center],
}
