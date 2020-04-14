import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'
import Avatar from '~/components/Avatar'

import { Container } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getDeliverymenRequest } from '~/store/modules/deliverymen/actions'
import ActionsButton from '~/components/ActionsButton'
import { toPad2 } from '~/utils/strings'
import { URL } from '~/utils/constants'
import { filterList } from '~/utils/helpers'

export default function Dashboard() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const handleSearch = useCallback(event => {
    setSearch(event.target.value)
  }, [])
  const deliverymen = useSelector(state => state.deliverymen.list)

  useEffect(() => {
    dispatch(getDeliverymenRequest())
  }, [dispatch])

  const columnNames = ['ID', 'Foto', 'Nome', 'Email']

  const data = useMemo(
    () =>
      deliverymen?.map(deliveryman => {
        const { id, name, email, avatar } = deliveryman

        return {
          id,
          name,
          email,
          avatar,
        }
      }),
    [deliverymen]
  )

  const list = useMemo(() => filterList(search, data), [data, search])

  const row = useMemo(
    () => (
      <>
        {list?.map(item => (
          <tr key={item.id}>
            <td> #{toPad2(item.id)} </td>
            <td>
              <Avatar src={item.avatar?.url} alt={item.name} />
            </td>
            <td> {item.name} </td>
            <td> {item.email} </td>
            <td>
              <ActionsButton id={item.id} />
            </td>
          </tr>
        ))}
      </>
    ),
    [list]
  )

  if (!deliverymen) return <Loading />

  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          onChange={handleSearch}
          placeholder="Buscar por entregadores"
          icon={MdSearch}
        />
        <Button to={URL.REGISTER_DELIVERYMAN}>
          <MdAdd size={18} color="white" />
          Cadastrar
        </Button>
      </section>
      <Table
        columnNames={columnNames}
        row={row}
        empty={deliverymen.length < 1}
      />
    </Container>
  )
}
