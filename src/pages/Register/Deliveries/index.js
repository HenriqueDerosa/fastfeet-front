import React, { useCallback, useState, useEffect } from 'react'
import Select from 'react-select'

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import TextField from '~/components/TextField'
import { URL } from '~/utils/constants'
import Header from '../Header'
import {
  createOrderRequest,
  updateOrderRequest,
} from '~/store/modules/orders/actions'
import { getDeliverymenRequest } from '~/store/modules/deliverymen/actions'
import { getRecipientsRequest } from '~/store/modules/recipients/actions'
import history from '~/services/history'

const RegisterDeliveries = () => {
  const recipientsList = useSelector(state =>
    state.recipients.list?.map(item => ({ value: item.id, label: item.name }))
  )
  const deliverymenList = useSelector(state =>
    state.deliverymen.list?.map(item => ({ value: item.id, label: item.name }))
  )

  const dispatch = useDispatch()

  const editData = useSelector(
    state =>
      history.location.state?.id &&
      state.orders?.list?.find(i => i.id === history.location.state.id)
  )

  const [data, setData] = useState({
    recipientId: null,
    deliverymanId: null,
    product: null,
  })

  useEffect(() => {
    if (editData) {
      const { recipient, deliveryman, product } = editData
      setData({
        recipientId: recipient.id,
        deliverymanId: deliveryman.id,
        product,
      })
    }
  }, [editData])

  useEffect(() => {
    dispatch(getRecipientsRequest())
    dispatch(getDeliverymenRequest())
  }, [dispatch])

  const handleSave = useCallback(() => {
    if (editData) {
      const {
        product,
        recipientId: recipient,
        deliverymanId: deliveryman,
      } = data

      dispatch(
        updateOrderRequest({
          id: history.location.state.id,
          product,
          recipient,
          deliveryman,
        })
      )
    } else {
      dispatch(createOrderRequest(data))
    }
  }, [data, dispatch, editData])

  const handleChangeFields = useCallback(
    event => {
      const { name, value } = event.currentTarget
      setData({
        ...data,
        [name]: value,
      })
    },
    [data]
  )

  const handleChangeSelect = useCallback(
    (selected, { name }) => {
      setData({
        ...data,
        [name]: selected.value,
      })
    },
    [data]
  )

  return (
    <Container>
      <Header
        title={editData ? 'Edição de encomenda' : 'Cadastro de encomendas'}
        handleSave={handleSave}
        backLink={URL.ORDERS}
        saveCondition={data.deliverymanId && data.product && data.recipientId}
      />

      <Content>
        <div className="recipient">
          <p>Destinatário</p>
          <Select
            name="recipientId"
            placeholder="Procurar"
            getOptionLabel={option => `${option.label}`}
            getOptionValue={option => `${option.value}`}
            options={recipientsList}
            onChange={handleChangeSelect}
            value={recipientsList?.find(e => e.value === data.recipientId)}
          />
        </div>
        <div className="deliveryman">
          <p>Entregador</p>
          <Select
            name="deliverymanId"
            placeholder="Procurar"
            getOptionLabel={option => `${option.label}`}
            getOptionValue={option => `${option.value}`}
            options={deliverymenList}
            onChange={handleChangeSelect}
            value={deliverymenList?.find(e => e.value === data.deliverymanId)}
          />
        </div>
        <div className="product">
          <p>Nome do produto</p>
          <TextField
            name="product"
            type="name"
            onChange={handleChangeFields}
            value={data.product}
          />
        </div>
      </Content>
    </Container>
  )
}

export default RegisterDeliveries
