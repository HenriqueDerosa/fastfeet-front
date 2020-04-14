import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { MdMoreHoriz } from 'react-icons/md'

import { Button, Container } from './styles'
import colors from '~/styles/colors'
import Tooltip from '../Tooltip'

const ActionsButton = ({ id, showDetails }) => {
  const [active, setActive] = useState(false)

  const handleView = useCallback(() => {
    showDetails(id)
    setActive(false)
  }, [id, showDetails])

  const handleClick = useCallback(() => {
    setActive(prev => !prev)
  }, [])

  return (
    <Container>
      <Button onClick={handleClick}>
        <MdMoreHoriz size={24} color={colors.silver} />
      </Button>
      {active && <Tooltip id={id} showDetails={handleView} />}
    </Container>
  )
}

ActionsButton.propTypes = {
  id: PropTypes.number.isRequired,
  showDetails: PropTypes.func,
}
ActionsButton.defaultProps = {
  showDetails: null,
}

export default ActionsButton
