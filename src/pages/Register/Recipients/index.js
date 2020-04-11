import React, { useCallback, useState, useEffect, useMemo } from 'react'
import Select from 'react-select'

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import TextField from '~/components/TextField'
import { URL } from '~/utils/constants'
import Header from '../Header'
import { createRecipientRequest } from '~/store/modules/recipients/actions'

const RegisterRecipients = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: null,
    address: null,
    number: null,
    address2: null,
    state: null,
    city: null,
    zipcode: null,
  })

  const handleSave = useCallback(() => {
    dispatch(createRecipientRequest(data))
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

  const renderField = useCallback(
    (name, label) => (
      <div className={name}>
        <p>{label}</p>
        <TextField
          name={name}
          type="name"
          onChange={handleChangeFields}
          value={data[name]}
        />
      </div>
    ),
    [data, handleChangeFields]
  )

  const renderAllFields = useMemo(() => {
    const fields = [
      { name: 'name', label: 'Nome' },
      { name: 'address', label: 'Rua' },
      { name: 'number', label: 'Número' },
      { name: 'address2', label: 'Complemento' },
      { name: 'state', label: 'Estado' },
      { name: 'city', label: 'Cidade' },
      { name: 'zipcode', label: 'CEP' },
    ]

    return <>{fields.map(field => renderField(field.name, field.label))}</>
  }, [renderField])

  return (
    <Container>
      <Header
        title="Cadastro de encomendas"
        handleSave={handleSave}
        backLink={URL.ORDERS}
        saveCondition={data.deliverymanId && data.product && data.recipientId}
      />

      <Content>{renderAllFields}</Content>
    </Container>
  )
}

export default RegisterRecipients
