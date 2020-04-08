import React from 'react'
import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md'
import history from '~/services/history'

import { Container, Button, Wrapper } from './styles'
import colors from '~/styles/colors'

const options = [
  {
    id: 'view',
    content: (
      <>
        <MdVisibility color={colors.primary} />
        <p>Visualizar</p>
      </>
    ),
    onClick: () => {
      history.push('/')
    },
  },
  {
    id: 'edit',
    content: (
      <>
        <MdCreate color={colors.blueberry} />
        <p>Editar</p>
      </>
    ),
    onClick: () => {
      history.push('/')
    },
  },
  {
    id: 'remove',
    content: (
      <>
        <MdDeleteForever color={colors.punch} />
        <p>Excluir</p>
      </>
    ),
    onClick: () => {
      // history.push('/')
      // dispatch
    },
  },
]

const Tooltip = () => {
  return (
    <Wrapper>
      <Container>
        {options.map(option => (
          <Button key={option.id} type="button" onClick={option.onClick}>
            {option.content}
          </Button>
        ))}
      </Container>
    </Wrapper>
  )
}

export default Tooltip
