import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { isPast } from 'date-fns'
import { Container } from './styles'
import colors from '~/styles/colors'
import { ORDER_STATUS } from '~/utils/constants'

export default function Status({ startDate, endDate }) {
  const statusId = useMemo(() => {
    if (isPast(new Date(startDate))) {
      return ORDER_STATUS.PENDING
    }
    if (isPast(new Date(endDate))) return ORDER_STATUS.DELIVERED

    return ORDER_STATUS.PROGRESS
  }, [endDate, startDate])

  const status = useMemo(() => {
    switch (statusId) {
      case ORDER_STATUS.DELIVERED:
        return { color: colors.status[statusId], label: 'Entregue' }
      case ORDER_STATUS.WITHDRAWN:
        return { color: colors.status[statusId], label: 'Retirada' }
      case ORDER_STATUS.CANCELLED:
        return { color: colors.status[statusId], label: 'Cancelada' }
      default:
        return { color: colors.status[statusId], label: 'Pendente' }
    }
  }, [statusId])

  return (
    <Container color={status.color}>
      <span>{status.label}</span>
    </Container>
  )
}

Status.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}
