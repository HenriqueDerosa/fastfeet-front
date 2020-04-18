import React, { useCallback, useState, useEffect, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import TextField from '~/components/TextField'
import { URL } from '~/utils/constants'
import Header from '../Header'
import { createRecipientRequest } from '~/store/modules/recipients/actions'
import history from '~/services/history'

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

  const editData = useSelector(
    state =>
      history.location.state?.id &&
      state.recipients?.list?.find(i => i.id === history.location.state.id)
  )

  useEffect(() => {
    if (editData) {
      const { name, address, number, address2, state, city, zipcode } = editData
      setData({
        name,
        address,
        number,
        address2,
        state,
        city,
        zipcode,
      })
    }
  }, [editData])

  const handleSave = useCallback(() => {
    if (editData) {
      // dispatch(updateRecipientRequest(data))
    } else {
      dispatch(createRecipientRequest(data))
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
        title={
          editData ? 'Edição de destinatário' : 'Cadastro de destinatários'
        }
        handleSave={handleSave}
        backLink={URL.ORDERS}
        saveCondition={data.deliverymanId && data.product && data.recipientId}
      />

      <Content>{renderAllFields}</Content>
    </Container>
  )
}

export default RegisterRecipients
