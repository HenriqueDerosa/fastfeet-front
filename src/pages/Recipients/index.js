import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'

import { Container } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getRecipientsRequest } from '~/store/modules/recipients/actions'
import ActionsButton from '~/components/ActionsButton'
import { toPad2 } from '~/utils/strings'
import { URL } from '~/utils/constants'
import { filterList } from '~/utils/helpers'

const columnNames = ['ID', 'Nome', 'Endereço']

export default function Dashboard() {
  const dispatch = useDispatch()

  const recipients = useSelector(state => state.recipients.list)

  const [search, setSearch] = useState('')

  const handleSearch = useCallback(event => {
    setSearch(event.target.value)
  }, [])

  useEffect(() => {
    dispatch(getRecipientsRequest())
  }, [dispatch])

  const data = useMemo(
    () =>
      recipients?.map(order => {
        const {
          id,
          name,
          address,
          address2,
          number,
          state,
          city,
          zipcode,
        } = order
        return {
          id,
          name,
          address: `${address} ${address2} ${number} - CEP ${zipcode} / ${city} - ${state}`,
        }
      }),
    [recipients]
  )

  const list = useMemo(() => filterList(search, data), [data, search])

  const row = useMemo(
    () => (
      <>
        {list?.map(item => (
          <tr key={item.id}>
            <td> #{toPad2(item.id)} </td>
            <td> {item.name} </td>
            <td> {item.address} </td>
            <td>
              <ActionsButton id={item.id} />
            </td>
          </tr>
        ))}
      </>
    ),
    [list]
  )

  if (!recipients) return <Loading />

  return (
    <Container>
      <header>
        <strong>Gerenciando destinatários</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          onChange={handleSearch}
          placeholder="Buscar por destinatários"
          icon={MdSearch}
        />
        <Button to={URL.REGISTER_RECIPIENTS}>
          <MdAdd size={18} color="white" />
          Cadastrar
        </Button>
      </section>
      <Table
        columnNames={columnNames}
        row={row}
        empty={recipients.length < 1}
      />
    </Container>
  )
}
