import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import history from '~/services/history'

import { Container, Button, Wrapper } from './styles'
import colors from '~/styles/colors'
import { URL } from '~/utils/constants'
import { deleteOrderRequest } from '~/store/modules/orders/actions'
import { deleteDeliverymenRequest } from '~/store/modules/deliverymen/actions'
import { deleteRecipientRequest } from '~/store/modules/recipients/actions'
import { cancelOrderRequest } from '~/store/modules/problems/actions'

const Tooltip = ({ id }) => {
  const dispatch = useDispatch()
  const { pathname } = history.location

  const options = useMemo(
    () => [
      {
        id: 'view',
        visibility: [URL.ORDERS, URL.PROBLEMS],
        content: (
          <>
            <MdVisibility color={colors.primary} />
            <p>Visualizar</p>
          </>
        ),
        onClick: () => {},
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
        onClick: () => {
          console.log('yey')
        },
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
        onClick: () => {
          if (pathname === URL.ORDERS) {
            dispatch(deleteOrderRequest(id))
          } else if (pathname === URL.DELIVERYMEN) {
            dispatch(deleteDeliverymenRequest(id))
          } else {
            dispatch(deleteRecipientRequest(id))
          }
        },
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
        onClick: () => {
          dispatch(cancelOrderRequest(id))
        },
      },
    ],
    [dispatch, id, pathname]
  )

  const availableOptions = useMemo(
    () =>
      options.filter(option =>
        option.visibility.includes(history.location.pathname)
      ),
    [options]
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

Tooltip.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Tooltip
