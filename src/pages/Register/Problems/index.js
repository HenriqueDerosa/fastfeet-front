import React, { useCallback, useState, useEffect } from 'react'
import Select from 'react-select'

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import TextField from '~/components/TextField'
import { URL } from '~/utils/constants'
import Header from '../Header'
import { createOrderRequest } from '~/store/modules/orders/actions'
import { getDeliverymenRequest } from '~/store/modules/deliverymen/actions'
import { getRecipientsRequest } from '~/store/modules/recipients/actions'

const RegisterDeliveryman = () => {
  const recipientsList = useSelector(state =>
    state.recipients.list?.map(item => ({ value: item.id, label: item.name }))
  )
  const deliverymenList = useSelector(state =>
    state.deliverymen.list?.map(item => ({ value: item.id, label: item.name }))
  )

  const dispatch = useDispatch()
  const [data, setData] = useState({
    recipientId: null,
    deliverymanId: null,
    product: null,
  })

  useEffect(() => {
    dispatch(getRecipientsRequest())
    dispatch(getDeliverymenRequest())
  }, [dispatch])

  const handleSave = useCallback(() => {
    dispatch(createOrderRequest(data))
  }, [data, dispatch])

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
        title="Cadastro de encomendas"
        handleSave={handleSave}
        backLink={URL.ORDERS}
        saveCondition={data.deliverymanId && data.product && data.recipientId}
      />

      <Content>
        <div className="recipient">
          <p>Destinatário</p>
          <Select
            name="recipientId"
            options={recipientsList}
            onChange={handleChangeSelect}
            value={data.recipientId}
          />
        </div>
        <div className="deliveryman">
          <p>Entregador</p>
          <Select
            name="deliverymanId"
            options={deliverymenList}
            onChange={handleChangeSelect}
            value={data.deliverymanId}
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

export default RegisterDeliveryman
