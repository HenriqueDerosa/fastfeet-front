import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'

import { Container, Signature } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getOrdersRequest } from '~/store/modules/orders/actions'
import ActionsButton from '~/components/ActionsButton'
import { toPad2 } from '~/utils/strings'
import Avatar from '~/components/Avatar'
import Status from './Status'
import { URL } from '~/utils/constants'
import { filterList } from '~/utils/helpers'
import Modal from '~/components/Modal'

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

  const [search, setSearch] = useState('')
  const [detailModal, setDetailModal] = useState(false)

  const handleSearch = useCallback(event => {
    setSearch(event.target.value)
  }, [])

  useEffect(() => {
    dispatch(getOrdersRequest())
  }, [dispatch])

  const data = useMemo(
    () =>
      orders?.map(order => {
        const {
          id,
          recipient,
          deliveryman,
          startDate,
          endDate,
          canceledAt,
        } = order

        return {
          id,
          recipient: recipient.name,
          deliveryman: deliveryman.name,
          avatar: deliveryman.avatar,
          city: recipient.city,
          state: recipient.state,
          startDate,
          endDate,
          canceledAt,
        }
      }),
    [orders]
  )

  const list = useMemo(() => filterList(search, data), [data, search])

  const showDetails = useCallback(id => {
    setDetailModal({ show: true, id })
  }, [])

  const closeModal = useCallback(() => {
    setDetailModal(false)
  }, [])

  const row = useMemo(
    () => (
      <>
        {list?.map(item => (
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
              <Status
                startDate={item.startDate}
                endDate={item.endDate}
                canceledAt={item.canceledAt}
              />
            </td>
            <td>
              <ActionsButton id={item.id} showDetails={showDetails} />
            </td>
          </tr>
        ))}
      </>
    ),
    [list, showDetails]
  )

  const selectedItem = useMemo(() => {
    const selected = orders?.find(i => i.id === detailModal.id)

    return (
      <>
        <strong>Informações da encomenda</strong>
        <p>{selected?.recipient.address}</p>
        <p>
          {selected?.recipient.city} - {selected?.recipient.state}
        </p>
        <p>{selected?.recipient.zipcode}</p>
        <hr />
        <strong>Datas</strong>
        <p>
          <strong>Retirada: </strong>
          {selected?.startDate || ' - '}
        </p>
        <p>
          <strong>Entrega: </strong>
          {selected?.endDate || ' - '}
        </p>
        <hr />
        <strong>Assinatura do destinatário</strong>
        {selected?.signature?.url ? (
          <Signature src={selected?.signature?.url} alt={selected?.name} />
        ) : (
          <p>Pendente</p>
        )}
      </>
    )
  }, [detailModal.id, orders])

  if (!orders) return <Loading />

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          onChange={handleSearch}
          placeholder="Buscar por encomendas"
          icon={MdSearch}
        />
        <Button to={URL.REGISTER_DELIVERIES}>
          <MdAdd size={18} color="white" />
          Cadastrar
        </Button>
      </section>
      {detailModal && <Modal closeEvent={closeModal}>{selectedItem}</Modal>}
      <Table columnNames={columnNames} row={row} empty={orders.length < 1} />
    </Container>
  )
}
