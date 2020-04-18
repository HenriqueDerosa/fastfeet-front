import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import colors from '~/styles/colors'
import { ORDER_STATUS } from '~/utils/constants'

const Status = ({ startDate, endDate, canceledAt }) => {
  const statusId = useMemo(() => {
    if (canceledAt) {
      return ORDER_STATUS.canceled
    }

    if (startDate && !endDate) {
      return ORDER_STATUS.WITHDRAWN
    }

    if (startDate && endDate) {
      return ORDER_STATUS.DELIVERED
    }

    return ORDER_STATUS.PENDING
  }, [canceledAt, endDate, startDate])

  const status = useMemo(() => {
    const color = colors.status[statusId]

    switch (statusId) {
      case ORDER_STATUS.DELIVERED:
        return { color, label: 'Entregue' }
      case ORDER_STATUS.WITHDRAWN:
        return { color, label: 'Retirada' }
      case ORDER_STATUS.canceled:
        return { color, label: 'Cancelada' }
      default:
        return { color, label: 'Pendente' }
    }
  }, [statusId])

  return (
    <Container color={status.color}>
      <span>{status.label}</span>
    </Container>
  )
}

Status.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  canceledAt: PropTypes.string,
}

Status.defaultProps = {
  startDate: null,
  endDate: null,
  canceledAt: null,
}

export default Status
