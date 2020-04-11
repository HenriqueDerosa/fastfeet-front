import React, { useMemo } from 'react'
import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md'
import history from '~/services/history'

import { Container, Button, Wrapper } from './styles'
import colors from '~/styles/colors'
import { URL } from '~/utils/constants'

const options = [
  {
    id: 'view',
    visibility: [URL.ORDERS, URL.PROBLEMS],
    content: (
      <>
        <MdVisibility color={colors.primary} />
        <p>Visualizar</p>
      </>
    ),
    onClick: null,
  },
  {
    id: 'edit',
    visibility: [URL.ORDERS, URL.DELIVERYMEN, URL.RECIPIENTS],
    content: (
      <>
        <MdCreate color={colors.blueberry} />
        <p>Editar</p>
      </>
    ),
    onClick: null,
  },
  {
    id: 'remove',
    visibility: [URL.ORDERS, URL.DELIVERYMEN, URL.RECIPIENTS],
    content: (
      <>
        <MdDeleteForever color={colors.punch} />
        <p>Excluir</p>
      </>
    ),
    onClick: null,
  },
  {
    id: 'cancel',
    visibility: [URL.PROBLEMS],
    content: (
      <>
        <MdDeleteForever color={colors.punch} />
        <p>Cancelar encomenda</p>
      </>
    ),
    onClick: null,
  },
]

const Tooltip = () => {
  const availableOptions = useMemo(
    () =>
      options.filter(option =>
        option.visibility.includes(history.location.pathname)
      ),
    []
  )

  return (
    <Wrapper>
      <Container>
        {availableOptions.map(option => (
          <Button key={option.id} onClick={option.onClick}>
            {option.content}
          </Button>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Tooltip
