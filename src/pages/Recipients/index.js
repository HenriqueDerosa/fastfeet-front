import React, { useMemo, useEffect } from 'react'
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

const columnNames = ['ID', 'Nome', 'Endereço']

export default function Dashboard() {
  const dispatch = useDispatch()

  const recipients = useSelector(state => state.recipients.list)

  useEffect(() => {
    dispatch(getRecipientsRequest())
  }, [dispatch])

  const data = useMemo(
    () =>
      recipients &&
      recipients.map(order => {
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

  const row = useMemo(
    () => (
      <>
        {data.map(item => (
          <tr key={item.id}>
            <td> #{toPad2(item.id)} </td>
            <td> {item.name} </td>
            <td> {item.address} </td>
            <td>
              <ActionsButton />
            </td>
          </tr>
        ))}
      </>
    ),
    [data]
  )

  if (recipients.length < 1) return <Loading />

  return (
    <Container>
      <header>
        <strong>Gerenciando destinatários</strong>
      </header>

      <section>
        <TextField
          name="search"
          type="text"
          placeholder="Buscar por destinatários"
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
