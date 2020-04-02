import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { isPast } from 'date-fns'
import { Container } from './styles'

const STATUS = {
  PENDING: 'Pendente',
  PROGRESS: 'Em andamento',
  DELIVERED: 'Entregue',
  WITHDRAWN: 'Retirada',
  CANCELLED: 'Cancelada',
}

export default function Status({ startDate, endDate }) {
  const status = useMemo(() => {
    if (isPast(new Date(startDate))) {
      return STATUS.PENDING
    }
    if (isPast(new Date(endDate))) return STATUS.DELIVERED
    return STATUS.PROGRESS
  }, [endDate, startDate])

  return (
    <Container>
      <span>{status}</span>
    </Container>
  )
}

Status.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}
