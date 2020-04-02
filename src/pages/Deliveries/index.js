import React, { useMemo, useEffect } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'

import { Container } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getOrdersRequest } from '~/store/modules/orders/actions'
import ActionsButton from '~/components/ActionsButton'
import { toPad2 } from '~/utils/strings'
import Avatar from '~/components/Avatar'
import Status from './Status'

const columnNames = [
  'ID',
  'Destinatário',
  'Entregador',
  'Cidade',
  'Estado',
  'Status',
]

export default function Dashboard() {
  const dispatch = useDispatch()

  const orders = useSelector(state => state.orders.list)

  useEffect(() => {
    dispatch(getOrdersRequest())
  }, [dispatch])

  const data = useMemo(
    () =>
      orders &&
      orders.map(order => {
        const { id, recipient, deliveryman, startDate, endDate } = order

        return {
          id,
          recipient: recipient.name,
          deliveryman: deliveryman.name,
          avatar: deliveryman.avatar,
          city: recipient.city,
          state: recipient.state,
          startDate,
          endDate,
        }
      }),
    [orders]
  )

  const row = useMemo(
    () => (
      <>
        {data.map(item => (
          <tr key={item.id}>
            <td> #{toPad2(item.id)} </td>
            <td> {item.recipient} </td>
            <td>
              <Avatar
                src={item.avatar?.url}
                alt={item.name}
                name={item.deliveryman}
              />
            </td>
            <td> {item.city} </td>
            <td> {item.state} </td>
            <td>
              <Status startDate={item.startDate} endDate={item.endDate} />
            </td>
            <td>
              <ActionsButton />
            </td>
          </tr>
        ))}
      </>
    ),
    [data]
  )

  if (orders.length < 1) return <Loading />

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
      <Table columnNames={columnNames} row={row} />
    </Container>
  )
}
