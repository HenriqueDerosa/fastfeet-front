import React, { useMemo, useEffect } from 'react'
import { isPast } from 'date-fns'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'

import { Container } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getOrdersRequest } from '~/store/modules/orders/actions'

export default function Dashboard() {
  const dispatch = useDispatch()

  const orders = useSelector(state => state.orders.list)

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

  const data = useMemo(
    () =>
      orders &&
      orders.map(order => {
        const { id, recipient, deliveryman, startDate, endDate } = order
        const getStatus = () => {
          if (isPast(new Date(startDate))) {
            return 'Pendente'
          }
          if (isPast(new Date(endDate))) return 'Entregue'
          return 'Em andamento'
        }
        return {
          id,
          recipient: recipient.name,
          deliveryman: deliveryman.name,
          city: recipient.city,
          state: recipient.state,
          status: getStatus(),
        }
      }),
    [orders]
  )

  if (!orders) return <Loading />

  return (
    <Container>
      <header>
        <strong>Gerenciando problemas</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          placeholder="Buscar por problemas"
          icon={MdSearch}
        />
        <Button>
          <MdAdd size={18} color="white" />
          Cadastrar
        </Button>
      </section>
      <Table columnNames={columnNames} data={data} />
    </Container>
  )
}
