import React, { useMemo, useEffect } from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '~/components/TextField'
import Loading from '~/components/Loading'

import { Container } from './styles'
import Button from '~/components/Button'
import Table from '../../components/Table'
import { getProblemsRequest } from '~/store/modules/problems/actions'
import ActionsButton from '~/components/ActionsButton'

export default function Dashboard() {
  const dispatch = useDispatch()

  const problems = useSelector(state => state.problems.list)

  useEffect(() => {
    dispatch(getProblemsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columnNames = ['Encomenda', 'Problema']

  const data = useMemo(
    () =>
      problems &&
      problems.map(problem => {
        const { id, deliveryId, description } = problem

        return {
          id,
          deliveryId,
          description,
        }
      }),
    [problems]
  )

  const row = useMemo(
    () => (
      <>
        {data.map(item => (
          <tr key={item.id}>
            <td> {item.deliveryId} </td>
            <td> {item.description} </td>
            <td>
              <ActionsButton />
            </td>
          </tr>
        ))}
      </>
    ),
    [data]
  )

  if (!problems) return <Loading />

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
      <Table columnNames={columnNames} row={row} />
    </Container>
  )
}
