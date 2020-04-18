import React, { useMemo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '~/components/Loading'

import { Container } from './styles'
import Table from '../../components/Table'
import { getProblemsRequest } from '~/store/modules/problems/actions'
import ActionsButton from '~/components/ActionsButton'
import { toPad2 } from '~/utils/strings'
import Modal from '~/components/Modal'

export default function Dashboard() {
  const dispatch = useDispatch()
  const [detailModal, setDetailModal] = useState(false)

  const problems = useSelector(state => state.problems.list)

  useEffect(() => {
    dispatch(getProblemsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showDetails = useCallback(id => {
    setDetailModal({ show: true, id })
  }, [])

  const closeModal = useCallback(() => {
    setDetailModal(false)
  }, [])

  const columnNames = ['Encomenda', 'Problema']

  const data = useMemo(
    () =>
      problems?.map(problem => {
        const { id, deliveryId, description } = problem

        return {
          id,
          deliveryId,
          description,
        }
      }),
    [problems]
  )
  const selectedItem = useMemo(() => {
    const selected = problems?.find(i => i.id === detailModal.id)
    return (
      <div>
        <p>{selected?.description}</p>
      </div>
    )
  }, [detailModal.id, problems])

  const row = useMemo(
    () => (
      <>
        {data?.map(item => (
          <tr key={item.id}>
            <td> #{toPad2(item.deliveryId)} </td>
            <td>
              {' '}
              {item.description.length > 70
                ? `${item.description.substr(0, 70)}...`
                : item.description}{' '}
            </td>
            <td>
              <ActionsButton id={item.id} showDetails={showDetails} />
            </td>
          </tr>
        ))}
      </>
    ),
    [data, showDetails]
  )

  if (!problems) return <Loading />

  return (
    <Container>
      <header>
        <strong>Problemas na entrega</strong>
      </header>

      {detailModal && <Modal closeEvent={closeModal}>{selectedItem}</Modal>}
      <Table columnNames={columnNames} row={row} empty={problems.length < 1} />
    </Container>
  )
}
