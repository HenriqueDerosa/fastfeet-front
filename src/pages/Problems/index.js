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
import { toPad2 } from '~/utils/strings'

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
            <td> #{toPad2(item.deliveryId)} </td>
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
        <strong>Problemas na entrega</strong>
      </header>

      <Table columnNames={columnNames} row={row} />
    </Container>
  )
}
