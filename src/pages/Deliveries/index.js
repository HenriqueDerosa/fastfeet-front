import React, { useState, useMemo, useEffect } from 'react'
import { format, isPast } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import pt from 'date-fns/locale/pt'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import api from '~/services/api'

import { Container, Time } from './styles'
import Button from '~/components/Button'
import Table from './Table'
import { getOrdersRequest } from '~/store/modules/orders/actions'

export default function Dashboard() {
  const dispatch = useDispatch()

  const orders = useSelector(state => state.orders.list)
  const [date, setDate] = useState(new Date())

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  )

  useEffect(() => {
    dispatch(getOrdersRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columnNames = [
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
  ]

  const data = useMemo(() => {
    const dataList = orders.map(order => {
      const { id, recipient, deliveryman, startDate, endDate } = order
      return {
        id,
        recipient: recipient.name,
        deliveryman: deliveryman.name,
        city: recipient.city,
        state: recipient.state,
        status:
          startDate && isPast(new Date(startDate)) ? 'Entregue' : 'Pendente',
      }
    })

    return dataList
  }, [orders])

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          placeholder="Buscar por encomendas"
          icon={MdSearch}
        />
        <Button>
          <MdAdd size={18} color="white" />
          Cadastrar
        </Button>
      </section>
      <Table columnNames={columnNames} data={data} />
      {/* <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul> */}
    </Container>
  )
}
