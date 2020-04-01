import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'

import { Button } from './styles'
import colors from '~/styles/colors'

export default function ActionsButton() {
  return (
    <Button>
      <MdMoreHoriz size={24} color={colors.silver} />
    </Button>
  )
}
