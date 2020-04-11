import React, { useState, useCallback } from 'react'
import { MdMoreHoriz } from 'react-icons/md'

import { Button, Container } from './styles'
import colors from '~/styles/colors'
import Tooltip from '../Tooltip'

export default function ActionsButton() {
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    setActive(prev => !prev)
  }, [])

  return (
    <Container>
      <Button onClick={handleClick}>
        <MdMoreHoriz size={24} color={colors.silver} />
      </Button>
      {active && <Tooltip />}
    </Container>
  )
}
